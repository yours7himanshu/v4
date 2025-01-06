<script setup lang="ts">
interface Epic {
  _path: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
  labels: string[];
  created_at: string;
  due_date: string;
  body: {
    driver?: string;
    "user-stories"?: string[];
    "success-metrics"?: string[];
    "related-issues"?: string[];
  };
}

interface Issue {
  _path: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: string;
  assignee: string;
  labels: string[];
  created_at: string;
  due_date: string;
  epic?: string;
}

const { data: issuesData } = await useAsyncData("issues", () =>
  queryContent<Issue>("/issues").find()
);

const { data: epicsData } = await useAsyncData("epics", () =>
  queryContent<Epic>("/epics").find()
);

const selectedEpic = ref<string | null>(null);

const epicMap = computed(() => {
  if (!epicsData.value) return new Map();

  const map = new Map();
  epicsData.value.forEach((epic) => {
    const epicId = epic._path.split("/").pop()?.replace(".md", "");
    if (epicId) {
      map.set(epicId, {
        title: epic.title,
        description: epic.description,
        body: epic.body,
      });
    }
  });
  return map;
});

const getEpicTitle = (epicId: string) => {
  return epicMap.value.get(epicId)?.title || epicId;
};

const getEpicInfo = (epicId: string) => {
  const epic = epicMap.value.get(epicId);
  console.log(epic);
  return epic;
};

const issues = computed(() => {
  if (!issuesData.value) return [];

  let filteredIssues = issuesData.value.filter((issue) => issue.status);

  if (selectedEpic.value) {
    filteredIssues = filteredIssues.filter(
      (issue) => issue.epic === selectedEpic.value
    );
  }

  // Take only the first occurrence of each _path to avoid duplicates
  const uniqueIssues = new Map();
  filteredIssues.forEach((issue) => {
    if (!uniqueIssues.has(issue._path)) {
      uniqueIssues.set(issue._path, issue);
    }
  });
  return Array.from(uniqueIssues.values());
});

const epics = computed(() => {
  if (!epicsData.value) return [];

  // Get all unique epic IDs from issues
  const epicIds = new Set(
    issuesData.value
      ?.filter((issue): issue is Issue & { epic: string } =>
        Boolean(issue.epic)
      )
      .map((issue) => issue.epic) || []
  );

  // Count issues per epic
  const epicCounts = new Map();
  issuesData.value?.forEach((issue) => {
    if (issue.epic) {
      epicCounts.set(issue.epic, (epicCounts.get(issue.epic) || 0) + 1);
    }
  });

  return Array.from(epicIds).map((epicId) => ({
    id: epicId,
    title: getEpicTitle(epicId),
    count: epicCounts.get(epicId) || 0,
  }));
});

const getIssueId = (path: string) => {
  const match = path.match(/us-(\d+)-/);
  return match ? match[1] : "";
};

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-500";
    case "medium":
      return "bg-yellow-500";
    case "low":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "todo":
      return "bg-gray-100";
    case "in-progress":
      return "bg-blue-50";
    case "done":
      return "bg-green-50";
    default:
      return "bg-gray-50";
  }
};

const selectEpic = (epic: string | null) => {
  selectedEpic.value = selectedEpic.value === epic ? null : epic;
};
</script>

<template>
  <div class="space-y-8">
    <!-- Epics Section -->
    <div class="space-y-4">
      <h2 class="text-lg font-semibold">Epics</h2>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="epic in epics"
          :key="epic.id"
          @click="selectEpic(epic.id)"
          :class="[
            'px-3 py-1.5 rounded-full text-sm transition-all flex items-center gap-2',
            selectedEpic === epic.id
              ? 'bg-purple-100 text-purple-800 ring-2 ring-purple-200'
              : 'bg-purple-50 text-purple-600 hover:bg-purple-100',
          ]"
        >
          {{ epic.title }}
          <span
            class="px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs"
          >
            {{ epic.count }}
          </span>
        </button>
      </div>

      <!-- Selected Epic Details -->
      <div
        v-if="selectedEpic"
        class="mt-4 p-6 rounded-lg border border-purple-200 bg-purple-50 space-y-6"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-medium text-purple-900 text-lg">
                {{ getEpicTitle(selectedEpic) }}
              </h3>
            </div>
            <p class="mt-2 text-sm text-purple-700">
              {{ getEpicInfo(selectedEpic)?.description }}
            </p>
          </div>
        </div>

        <!-- Driver -->
        <div v-if="getEpicInfo(selectedEpic)?.body" class="prose">
          <ContentRendererMarkdown :value="getEpicInfo(selectedEpic)?.body" />
        </div>
      </div>
    </div>

    <!-- Issues Section -->
    <div class="space-y-4">
      <div
        v-for="issue in issues"
        :key="issue._path"
        :class="[
          'rounded-lg p-4 transition-all hover:shadow-md',
          getStatusColor(issue.status),
        ]"
      >
        <div class="flex items-start gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <div
                :class="[
                  'w-2 h-2 rounded-full',
                  getPriorityColor(issue.priority),
                ]"
              />
              <div class="text-xs text-gray-500 font-mono">
                US-{{ getIssueId(issue._path) }}
              </div>
              <h3 class="font-medium">{{ issue.title }}</h3>
            </div>
            <p class="mt-1 text-sm text-gray-600">{{ issue.description }}</p>

            <div class="mt-3 flex flex-wrap items-center gap-3">
              <div class="flex gap-1">
                <button
                  v-if="issue.epic"
                  @click="selectEpic(issue.epic)"
                  class="text-[10px] px-2 py-0.5 rounded-full border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  {{ getEpicTitle(issue.epic) }}
                </button>
                <Badge
                  v-for="label in issue.labels"
                  :key="label"
                  variant="secondary"
                  class="text-[10px] px-1.5"
                >
                  {{ label }}
                </Badge>
              </div>

              <div class="flex items-center gap-2 text-xs text-gray-500">
                <Icon name="uil:user" class="w-3 h-3" />
                {{ issue.assignee }}
              </div>

              <Badge
                :class="{
                  'bg-gray-100 hover:bg-gray-200': issue.status === 'todo',
                  'bg-blue-100 hover:bg-blue-200':
                    issue.status === 'in-progress',
                  'bg-green-100 hover:bg-green-200': issue.status === 'done',
                }"
              >
                {{ issue.status }}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

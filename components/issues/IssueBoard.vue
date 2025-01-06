<script setup lang="ts">
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

const { data } = await useAsyncData("issues", () =>
  queryContent<Issue>("/issues").find()
);

const issues = computed(() => {
  if (!data.value) return [];
  // Take only the first occurrence of each _path to avoid duplicates
  const uniqueIssues = new Map();
  data.value.forEach((issue) => {
    if (!uniqueIssues.has(issue._path) && issue.status) {
      uniqueIssues.set(issue._path, issue);
    }
  });
  return Array.from(uniqueIssues.values());
});

const getIssueId = (path: string) => {
  const match = path.match(/us-(\d+)-/);
  return match ? match[1] : "";
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
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
</script>

<template>
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
              <Badge
                v-if="issue.epic"
                variant="outline"
                class="text-[10px] px-1.5 border-purple-200 bg-purple-50 text-purple-700"
              >
                {{ issue.epic }}
              </Badge>
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
                'bg-blue-100 hover:bg-blue-200': issue.status === 'in-progress',
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
</template>

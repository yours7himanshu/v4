<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface Issue extends ParsedContent {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: string;
  assignee: string;
  labels: string[];
  created_at: string;
  due_date: string;
}

const { data: issues } = await useAsyncData("issues", () =>
  queryContent<Issue>("/issues").find()
);

console.log("All content:", issues.value);

const columns = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const getIssuesByStatus = (status: string) => {
  return (issues.value || []).filter((issue) => issue.status === status);
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
</script>

<template>
  <div class="p-4">
    <div class="flex gap-4">
      <div
        v-for="column in columns"
        :key="column.id"
        class="flex-1 bg-gray-50 rounded-lg p-3"
      >
        <h3 class="text-sm font-semibold mb-3">{{ column.title }}</h3>
        <div class="space-y-2">
          <Card
            v-for="issue in getIssuesByStatus(column.id)"
            :key="issue._id"
            class="bg-white shadow-sm"
          >
            <CardHeader class="p-3 pb-2">
              <CardTitle class="text-sm font-medium">{{
                issue.title
              }}</CardTitle>
              <CardDescription class="text-xs">{{
                issue.description
              }}</CardDescription>
            </CardHeader>
            <CardContent class="p-3 pt-0">
              <div class="flex flex-wrap gap-1">
                <Badge
                  v-for="label in issue.labels"
                  :key="label"
                  variant="secondary"
                  class="text-[10px] px-1 py-0"
                >
                  {{ label }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

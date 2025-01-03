import { defineStore } from "pinia";
import { ref, computed } from "vue";

type ContextType = "feed" | "discovery" | "profile" | "geographic" | "style";

interface ContextState {
  type: ContextType;
  params: Record<string, string>;
  history: {
    type: ContextType;
    params: Record<string, string>;
    timestamp: string;
  }[];
}

export const useContextStore = defineStore("context", () => {
  // State
  const currentContext = ref<ContextState>({
    type: "feed",
    params: {},
    history: [],
  });

  const cache = ref<Record<string, any>>({});

  // Getters
  const contextType = computed(() => currentContext.value.type);
  const contextParams = computed(() => currentContext.value.params);
  const contextHistory = computed(() => currentContext.value.history);

  // Actions
  function switchContext(
    type: ContextType,
    params: Record<string, string> = {}
  ) {
    // Save current context to history
    currentContext.value.history.push({
      type: currentContext.value.type,
      params: currentContext.value.params,
      timestamp: new Date().toISOString(),
    });

    // Limit history size
    if (currentContext.value.history.length > 10) {
      currentContext.value.history.shift();
    }

    // Update current context
    currentContext.value.type = type;
    currentContext.value.params = params;
  }

  function getCacheKey(key: string) {
    return `${currentContext.value.type}:${key}`;
  }

  function setCacheValue(key: string, value: any) {
    const cacheKey = getCacheKey(key);
    cache.value[cacheKey] = {
      value,
      timestamp: Date.now(),
    };
  }

  function getCacheValue(key: string) {
    const cacheKey = getCacheKey(key);
    const cached = cache.value[cacheKey];

    if (!cached) return null;

    // Cache expires after 5 minutes
    const isExpired = Date.now() - cached.timestamp > 5 * 60 * 1000;
    if (isExpired) {
      delete cache.value[cacheKey];
      return null;
    }

    return cached.value;
  }

  function clearCache() {
    cache.value = {};
  }

  function goBack() {
    const lastContext = currentContext.value.history.pop();
    if (lastContext) {
      currentContext.value.type = lastContext.type;
      currentContext.value.params = lastContext.params;
    }
  }

  return {
    // State
    currentContext,
    // Getters
    contextType,
    contextParams,
    contextHistory,
    // Actions
    switchContext,
    setCacheValue,
    getCacheValue,
    clearCache,
    goBack,
  };
});

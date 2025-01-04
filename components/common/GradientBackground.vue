<template>
  <!-- Animated background -->
  <div class="absolute inset-0">
    <!-- Base background -->
    <div class="absolute inset-0 bg-purple-950"></div>

    <!-- Animated blobs -->
    <div class="absolute inset-0">
      <div
        class="absolute w-[1000px] h-[1000px] -top-[400px] -left-[200px] rounded-full bg-primary/50 mix-blend-soft-light blur-[128px] animate-blob"
      ></div>
      <div
        class="absolute w-[800px] h-[800px] top-[20%] right-[0px] rounded-full bg-accent/50 mix-blend-soft-light blur-[128px] animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute w-[600px] h-[600px] bottom-[-10%] left-[20%] rounded-full bg-secondary/50 mix-blend-soft-light blur-[128px] animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Subtle noise texture -->
    <div
      class="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
      style="
        background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPg0KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPg0KPC9maWx0ZXI+DQo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+DQo8L3N2Zz4=&quot;);
      "
    ></div>
  </div>
</template>

<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index";
  import * as Button from "$lib/components/ui/button";
  import * as ModeWatcher from "mode-watcher";

  import * as LucideIcons from "@lucide/svelte/icons";
</script>

<nav class="flex items-center justify-between w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-2">
  <NavigationMenu.Root>
    <NavigationMenu.List class="flex items-center gap-4">
      <NavigationMenu.Item>
        <NavigationMenu.Trigger class="font-medium hover:text-primary transition-colors">
          Home
        </NavigationMenu.Trigger>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger class="hover:text-primary transition-colors">
          Library
        </NavigationMenu.Trigger>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger class="hover:text-primary transition-colors">
          About
        </NavigationMenu.Trigger>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>

  <Button.Root variant="outline">
    Log In
  </Button.Root>

  <Button.Root variant="outline" onclick=ModeWatcher.toggleMode>
    <LucideIcons.Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
    <LucideIcons.Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle dark-mode</span>
  </Button.Root>
</nav>

<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index';
	import * as Button from '$lib/components/ui/button';
	import * as ModeWatcher from 'mode-watcher';

	import * as LucideIcons from '@lucide/svelte/icons';
</script>

<nav
	class="flex w-full items-center justify-between border-b bg-background/80 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<NavigationMenu.Root>
		<NavigationMenu.List class="flex items-center gap-4">
			<NavigationMenu.Item>
				<NavigationMenu.Trigger class="font-medium transition-colors hover:text-primary">
					Home
				</NavigationMenu.Trigger>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger class="transition-colors hover:text-primary">
					Library
				</NavigationMenu.Trigger>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger class="transition-colors hover:text-primary">
					About
				</NavigationMenu.Trigger>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>

	<Button.Root variant="outline">Log In</Button.Root>

	<Button.Root variant="outline" onclick="ModeWatcher.toggleMode">
		<LucideIcons.Sun
			class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
		/>
		<LucideIcons.Moon
			class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
		/>
		<span class="sr-only">Toggle dark-mode</span>
	</Button.Root>
</nav>

<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import '../app.css';

    // svelte-ignore non_reactive_update
        let showButtons = false;
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

{@render children()}
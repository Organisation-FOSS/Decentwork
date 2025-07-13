<script lang="ts">
    let Instances = 0;
    let paragraphs: string[] = [];

    function append() {
         Instances++
         paragraphs = [...paragraphs, "Hi "];
    }

    function remove(index : number) {
        paragraphs = paragraphs.filter((_,i) => i !== index);
    }

    //Decentwork Data
    import { onMount } from 'svelte';

    type WebsiteData = {
        name: string;
        icon: string;
        frontend?: string;
        backend?: string;
    }

    let websites: WebsiteData[] = [];

    onMount(() => {
		(window as any).__DECENTWORK__ = {
			id: "DecentworkClient",
			_receiveCode: ({ frontend, backend, name, icon }: WebsiteData) => {
				console.log("[Decentwork] Received site source!");
				console.log("Name:", name);
				console.log("Icon:", icon);
				console.log("Frontend HTML:", frontend);
				console.log("Backend API:", backend);

				if (!websites.find(site => site.name === name)) {
					websites = [...websites, { frontend, backend, name, icon }];
				}

				window.dispatchEvent(new CustomEvent("decentwork:received", {
					detail: { frontend, backend }
				}));
			}
		};
	});
</script>
<div class="column" id="order">
<div class="row">
<div class="dropdown">
<button class="button dropbtn">Order</button>
<div class="dropdown-content">
    <button>Alphabetically</button>
</div>
</div>
<h1>Decentwork</h1>
<div class="dropdown">
<button class="button dropbtn">Settings</button>
<div class="dropdown-content dropright">
    <a href="/client">Client</a>
    <a href="/account">Account</a> 
</div>
</div>
</div>
<button id="CoolButton" on:click={append}>CoolButton!</button>
{#each paragraphs as text, index}
    <div class="row">
    <p>{text}</p>
    <button on:click={() => remove(index)}>End</button>
    </div>
{/each}
{#each websites as site}
	<div class="row">
		<img src={site.icon} alt="Icon" width="32" height="32" />
		<h2>{site.name}</h2>
	</div>
{/each}
</div>

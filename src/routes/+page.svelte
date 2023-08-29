<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const users = data.users;

  // console.log(data.users);
</script>

{#each users as user}
  <div>#{user.id}, {user.isAdmin}, {user.name}, {user.email}</div>
{/each}

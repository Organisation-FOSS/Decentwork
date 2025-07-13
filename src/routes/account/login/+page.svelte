<h1>Login</h1>
<script>
  import { user } from '../../../Logic';

  /**
     * @type {any}
     */
  let username;
  /**
     * @type {any}
     */
  let password;

  function login() {
    // @ts-ignore
    user.auth(username, password, ({ err }) => err && alert(err));
  }

  function signup() {
    // @ts-ignore
    user.create(username, password, ({ err }) => {
      if (err) {
        alert(err);
      } else {
        login();
      }
    });
  }
</script>
<div class="column">
    <label for="username">Username</label>
<input name="username" bind:value={username} minlength="3" maxlength="16" />

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<button class="login" on:click={login}>Login</button>
<button class="login"  on:click={signup}>Sign Up</button>
</div>


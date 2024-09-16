<script>
  import Link from "./Link.svelte";
  import Title from "./Title.svelte";
  import { telegram, twiter, email} from "../icons";

  export let active = false
</script>

<section class="contact">
  <div class="contact__inner">
    <Title text="Contact us" {active}/>
    <div class="contact__content">
      <Link icon={telegram} text='Telegram'/>
      <Link icon={twiter} text='Twiter'/>
      <Link icon={email} text='Email'/>
    </div>
  </div>
</section>

<style lang="scss">
  .contact {
    padding: 100px 50px;
    height: 100vh;

    &__inner {
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: 100%;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      height: 100%;
    }
  }

</style>
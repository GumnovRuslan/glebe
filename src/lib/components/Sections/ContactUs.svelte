<script>
  import Link from "../Link.svelte";
  import Title from "../Title.svelte";
  import { telegram, twiter, email} from "../../icons";

  export let active = false
</script>

<section class="contact">
  <div class="contact__inner">
    <Title text="Contact us" {active}/>
    <div class="contact__content">
      <Link icon={telegram} text='https://t.me/glebecommunity' href="https://t.me/glebecommunity"/>
      <Link icon={twiter} text='https://x.com/GlebeComm' href="https://x.com/GlebeComm"/>
      <Link icon={email} text='mailto:info@glebe.online' href="mailto:info@glebe.online"/>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .contact {
    // padding: 90px 50px;
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
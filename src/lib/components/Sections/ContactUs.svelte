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
      <Link icon={telegram} text='t.me/glebecommunity' href="https://t.me/glebecommunity"/>
      <Link icon={twiter} text='x.com/GlebeComm' href="https://x.com/GlebeComm"/>
      <Link icon={email} text='info@glebe.online' href="mailto:info@glebe.online"/>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .contact {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    

    &__inner {
      width: 100%;
      display: flex;
      flex-direction: column;

      @include media-breakpoint-up(md) {
        gap: 100px;
      }
      @include media-breakpoint-down(md) {
        align-items: center;
        gap: 60px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      @include media-breakpoint-up(md) {
        gap: 20px;
      }
    }
  }

</style>
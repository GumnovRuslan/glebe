<script>
  import { telegram, twiter, email } from '../icons'
</script>

<footer class="footer">
  <div class="footer__inner">
    <a href="https://t.me/glebecommunity" class="footer__icon">
      {@html telegram}
    </a>
    <a href="https://x.com/GlebeComm" class="footer__icon">
      {@html twiter}
    </a>
    <a href="mailto:info@glebe.online" class="footer__icon">
      {@html email}
    </a>
  </div>
</footer>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 20px;

    &__inner {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 10px;

      @include media-breakpoint-up(md) {
        justify-content: flex-end;
      }

      @include media-breakpoint-down(md) {
        justify-content: space-evenly;
      }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 50px;
      max-height: 50px;
      padding: 7px;
      transition: 0.3s;
      color: #fff;

      &:hover {
        outline: 1px solid #4073ff;
        box-shadow: 0 0 10px #4073ff;
        color: #4073ff;
      }
    }
  }
</style>
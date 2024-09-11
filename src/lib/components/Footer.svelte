<script>
  import { telegram, twiter, email } from '../icons'
</script>

<footer class="footer">
  <div class="footer__inner">
    <a href="https://x.com/GlebeComm" class="footer__icon">
      {@html telegram}
    </a>
    <a href="https://t.me/glebecommunity" class="footer__icon">
      {@html twiter}
    </a>
    <a href="mailto:info@glebe.online" class="footer__icon">
      {@html email}
    </a>
  </div>
</footer>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 20px;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
      padding: 10px;
      border-radius: 50px;
      box-shadow: 0 0 5px #fff;
      background: #00000098;
      backdrop-filter: blur(5px);
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 40px;
      max-height: 40px;
      padding: 7px;
      border-radius: 50%;
      transition: 0.3s;
      background: #fff;
      color: #000;

      &:hover {
        outline: 1px solid #4073ff;
        box-shadow: 0 0 10px #4073ff;
        color: #4073ff;
      }
    }
  }
</style>
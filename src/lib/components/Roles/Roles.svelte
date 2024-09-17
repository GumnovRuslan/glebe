<script>
  import RolesCard from "./RolesCard.svelte";
  import Title from "../Title.svelte";
</script>

<section class="roles">
  <div class="roles__inner">
    <Title text='Roles and Opportunities'/>

    <div class="roles__cards">
      <RolesCard 
        front={{src: '/images/Glebe_1.jpg', title: 'Digger'}} 
        back={{title: 'Digger', text: 'text'}}
      />
      <RolesCard 
        front={{src: '/images/Glebe_1.jpg', title: 'LandLord'}} 
        back={{title: 'LandLord', text: 'LandLord owns parcels of land that can be leased to gold miners. Land ownership is secured through NFTs, which are unique assets with real value. The better the parcel of land, the more profit can be gained for the lease. In this way, LandLord earns passive income without directly participating in mining.'}}
        />
      <RolesCard 
        front={{src: '/images/Glebe_1.jpg', title: 'ToolLord'}} 
        back={{title: 'ToolLord', text: 'ToolLord invests in equipment and tools that are vital to gold miners. Players can rent these tools for mining, and ToolLord receives a steady rental income. Like land, the tools are NFTs, providing the owner with ownership of a unique digital asset.'}}
        />
      <RolesCard 
        front={{src: '/images/Glebe_1.jpg', title: 'IslandLord'}} 
        back={{title: 'IslandLord', text: 'IslandLord owns entire islands that can be rented out or used to create large events and activities within the game. This is the most elite role with great passive income opportunities. By owning an island through NFT, IslandLord controls large tracts of virtual real estate, which creates additional demand among players.'}}
      />
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .roles {
    height: 100vh;
    // padding: 100px 60px;

    &__inner {
      display: flex;
      flex-direction: column;
      height: 100%;

      @include media-breakpoint-up(xxl) {
        gap: 50px;
      }

      @include media-breakpoint-between(xl, xxl) {
        gap: 40px;
      }
    }

    &__cards {
      display: grid;
      align-content: center;
      justify-content: center;
      height: 100%;

      @include media-breakpoint-up(xxl) {
        grid-template-columns: repeat(2, 500px);
        grid-template-rows: repeat(2, 300px);
        gap: 40px;
      }

      @include media-breakpoint-between(xl, xxl) {
        grid-template-columns: repeat(2, 400px);
        grid-template-rows: repeat(2, 250px);
        gap: 30px;
      }

      @include media-breakpoint-between(lg, xl) {
        grid-template-columns: repeat(2, 350px);
        grid-template-rows: repeat(2, 220px);
        gap: 30px;
      }

      @include media-breakpoint-between(md, lg) {
        grid-template-columns: repeat(2, 330px);
        grid-template-rows: repeat(2, 210px);
        gap: 25px;
      }

      @include media-breakpoint-down( md) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 120px);
        gap: 15px;
      }
    }
  }
</style>
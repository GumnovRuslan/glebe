<script>
  import RolesCard from "./RolesCard.svelte";
  import Title from "../../Title.svelte";

  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
</script>

<section class="roles">
  <div class="roles__inner">
    <Title text='Roles and Opportunities'/>

    <div class="roles__slider_content">
      <div>
        <Splide class='slider' 
          options={{
            autoHeight: true,
            height   : '500px',
            padding: '30px',
            arrows: false,
            pagination: false,
            perPage: 4,
            breakpoints: {
              1440: {
                perPage: 4,
                height: '500px',
              },
              1280: {
                padding: '30px',
                perPage: 3,
                height   : '450px',
              },
              1024: {
                padding: '50px',
                perPage: 2,
                height   : '500px',
              },
              800: {
                padding: '100px',
                perPage: 1,
                height   : '500px',
              },
              560: {
                gap: '10px',
                padding: '30px',
                perPage: 1,
                height   : '500px',
              }
            }
          }}
          
          >
          <SplideSlide>
            <RolesCard 
              front={{src: '/images/roles/digger.webp', title: 'Digger'}} 
              back={{title: 'Digger', text: `Players who have chosen this role go on expeditions to various lands to mine for gold. Each new exploration or mining attempt can result in a large “catch” - digital gold that can be sold on the game's internal market for cryptocurrency. This is an active role where success depends on the ability to find profitable areas and choose the right tools.`}}
            />
          </SplideSlide>
          
          <SplideSlide>
            <RolesCard 
              front={{src: '/images/roles/landLord.webp', title: 'LandLord'}} 
              back={{title: 'LandLord', text: `LandLord owns parcels of land that can be leased to gold miners. Land ownership is secured through NFTs, which are unique assets with real value. The better the parcel of land, the more profit can be gained for the lease. In this way, LandLord earns passive income without directly participating in mining.`}}
            />
          </SplideSlide>
  
          <SplideSlide>
            <RolesCard 
              front={{src: '/images/roles/Craftsman.webp', title: 'Craftsman'}} 
              back={{title: 'Craftsman', text: `Craftsman invests in equipment and tools that are vital to gold miners. Players can rent these tools for mining, and Craftsman receives a steady rental income. Like land, the tools are NFTs, providing the owner with ownership of a unique digital asset.`}}
            />
          </SplideSlide>
  
          <SplideSlide>
            <RolesCard 
              front={{src: '/images/roles/Glebarch.webp', title: 'Glebarch'}} 
              back={{title: 'Glebarch', text: `Glebarch owns entire islands that can be rented out or used to create large events and activities within the game. This is the most elite role with great passive income opportunities. By owning an island through NFT, Glebarch controls large tracts of virtual real estate, which creates additional demand among players.`}}
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
    
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  
  .roles {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    height: 100vh;

    &__inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 20px;

      @include media-breakpoint-up(xxl) {
        gap: 50px;
      }

      @include media-breakpoint-between(xl, xxl) {
        gap: 40px;
      }
    }

    &__slider_content {
      flex: content;
      display: flex;
      align-items: center;

      & > div {
        width: 100%;
      }
    }
  }
</style>
<template>
  <div class="block-campus-map">
    <modal-generic v-show="isModalVisible" class="modal" @close="closeModal">
      <div class="modal-content">
        <iframe :src="parsedSrc" class="iframe-modal" allowfullscreen />
      </div>
    </modal-generic>
    <button class="title" @click="showModal" />
    <div class="content">
      <div class="iframe-hover">
        <div class="iframe-container">
          <iframe :src="parsedSrc" class="iframe" allowfullscreen />
          <div class="iframe-click" @click="showModal" />
        </div>
      </div>
      <div v-if="buildingAccess" class="text-grouping">
        <h4 class="subheading-small">Building Access</h4>
        <rich-text class="building-access-text" :rich-text-content="buildingAccess" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import ModalGeneric from "@/lib-components/ModalGeneric";
import RichText from "@/lib-components/RichText";

export default {
  name: "BlockCampusMap",
  components: {
    ModalGeneric,
    RichText,
  },
  props: {
    campusLocationId: {
      type: String,
      default: "",
    },
    locationName: {
      type: String,
      default: "",
    },
    buildingAccess: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const isModalVisible = ref(false);

    const parsedSrc = computed(() => `https://map.ucla.edu/?id=${props.campusLocationId}&e=true`);

    const showModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    return {
      isModalVisible,
      parsedSrc,
      showModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.block-campus-map {
    max-width: $container-l-main + px;
    margin: 0 auto;
    position: relative;

    .title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: 16px;
    }
    .title::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: stretch;
    }

    .iframe-hover {
        max-width: 50%;
        min-width: 426px;
        margin-right: 50px;
        position: relative;
    }

    .iframe-container {
        overflow: hidden;
        /* 16:9 aspect ratio */
        padding-top: 56.25%;
        position: relative;
    }

    .iframe {
        border: 0;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: 10;
    }

    .iframe-click {
        left: 0;
        top: 0;
        z-index: 20;
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .text-grouping {
        max-width: 40%;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-start;
    }

    .subheading-small {
        color: var(--color-primary-blue-05);
        @include overline;
        margin-bottom: var(--space-s);
    }

    :deep(.rich-text) {
        padding-right: unset;
        margin: unset;
    }

    .modal {
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        top: 0;
        z-index: 500;
    }

    .modal-content {
        min-width: 928px;
        min-height: 600px;
        max-width: $container-l-main + px;
        padding-top: 75%;
    }

    .iframe-modal {
        border: 0;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        @include shadow-lightbox-01;
        position: absolute;
        z-index: 10;
    }

    // Hovers
    @media #{$has-hover} {
        .iframe-container:hover {
            @include shadow-01;
        }
    }

    // Breakpoints

    @media #{$medium} {
        .content {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
        }

        .text-grouping {
            max-width: 100%;
            margin-top: var(--space-m);
        }

        .iframe-hover {
            max-width: 100%;
            min-width: 600px;
            margin: 0px 0px 24px;
        }
    }
    @media #{$small} {
        .content {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
        }

        .text-grouping {
            max-width: 100%;
            margin-top: var(--space-m);
        }

        .iframe-hover {
            max-width: 100%;
            min-width: 272px;
            margin-right: 0;
        }
    }
}
</style>

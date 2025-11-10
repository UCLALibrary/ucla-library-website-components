<script>
export default {
  name: 'AuthFirefoxModal',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      collapsed: true,
    }
  },
  methods: {
    closeModal() {
      this.show = false
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
  },
}
</script>

<template>
  <div
    v-if="show"
    class="modal-overlay"
  >
    <div class="modal">
      <div class="close-container">
        <button
          class="close-button"
          @click="closeModal"
        >
          <svg
            class="close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
      </div>
      <h3 class="modal-title">
        {{ title }}
      </h3>

      <button
        class="collapse-button"
        @click="toggleCollapse"
      >
        <div class="collapse-button-content">
          <svg
            class="collapse-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              v-if="collapsed"
              d="M10 17l5-5-5-5v10z"
            />
            <path
              v-else
              d="M12 7l5 5-5 5V7z"
            />
          </svg>
          <span
            v-if="collapsed"
            class="collapse-text"
          >Open details</span>
          <span
            v-else
            class="collapse-text"
          >Close details</span>
        </div>
      </button>
      <div v-if="!collapsed">
        <div
          class="detail-text"
          v-html="message"
        />
      </div>
    </div>
  </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 60%;
}

.modal-title {
  font-size: 1.25rem;
}

@media (max-width: 1024px) {
  .modal-overlay {
    margin: 10px;
  }

  .modal {
    width: 60%;
    margin: 10px;
    padding: 10px;
  }

  .modal-title {
    font-size: 1rem;
  }

  .detail-text {
    font-size: 13px;
  }
}

@media (max-width: 750px) {
  .modal {
    width: 60%;
    margin: 10px;
    padding: 10px;
  }

  .modal-title {
    font-size: 0.95rem;
  }

  .detail-text {
    font-size: 12px;
  }
}

.collapse-button {
  margin-bottom: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.collapse-button-content {
  display: flex;
  align-items: center;
}

.collapse-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  margin-right: 5px;
}

.collapse-text {
  font-size: 14px;
  color: #777;
}

.close-container {
  float: right;
}

.close-button {
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.close-icon {
  width: 16px;
  height: 24px;
  fill: currentColor;
}
</style>

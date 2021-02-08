<template>
  <div>
    <Layout>
      <div id="page-pricing" class="pt-16">
        <div class="pring-main">
          <div class="pricing-hd">
            <div class="pricing-hd-txt bg-main-dark text-white pt-8 p-3">
              <h1 class="text-xl text-gray-300 font-bold text-center">
                PRICING
              </h1>
              <h1 class="text-5xl font-bold mt-5 text-center">
                Basic Pricing that fits your need
              </h1>
              <p class="text-gray-100 mt-2 text-center">Choose a plan.</p>
              <div class="pricing-card-con">
                <div
                  class="pricing-cards flex justify-center items-center flex-row animate-reveal"
                >
                  <div class="pricing bg-white rounded mt-5 w-3/12 h-full">
                    <div class="card-tp p-3">
                      <div
                        class="card-tp-txt bg-main-light px-3 py-0 rounded-lg w-16"
                      >
                        <h3 class="text-lg text-main-dark font-bold">Free</h3>
                      </div>
                    </div>
                    <div class="card-price px-4 mt-1">
                      <h1 class="font-bold text-5xl text-main-dark">
                        $0<span class="font-medium text-2xl">/month</span>
                      </h1>
                    </div>
                    <div
                      class="card-btm bg-gray-100 mt-3 rounded-b border-t border-gray-200"
                    >
                      <div class="card-btm-align flex items-center p-3">
                        <ul>
                          <li
                            class="flex items-center mt-3"
                            v-for="freePricing in freePricings"
                            :key="freePricing.id"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              class="w-8 text-main-dark"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <p class="text-gray-500 font-medium ml-2">
                              {{ freePricing.title }}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div class="sn-btn">
                        <div class="s-btn-con p-2 mt-3 pb-3">
                          <router-link to="/signup">
                            <button
                              class="py-2 focus:outline-none bg-main-color text-white text-lg font-medium w-full rounded hover:opacity-80"
                              @click="getPlan()"
                            >
                              Sign up
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pricing bg-white rounded mt-5 w-3/12 h-full ml-5">
                    <div class="card-tp p-3">
                      <div
                        class="card-tp-txt bg-main-light px-3 py-0 rounded-lg w-24"
                      >
                        <h3 class="text-lg text-main-dark font-bold">Premium</h3>
                      </div>
                    </div>
                    <div class="card-price px-4 mt-1">
                      <h1 class="font-bold text-5xl text-main-dark">
                        $35<span class="font-medium text-2xl">/month</span>
                      </h1>
                    </div>
                    <div
                      class="card-btm bg-gray-100 mt-3 rounded-b border-t border-gray-200"
                    >
                      <div class="card-btm-align flex items-center p-3">
                        <ul>
                          <li
                            class="flex items-center mt-3"
                            v-for="standardPricing in standardPricings"
                            :key="standardPricing.id"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              class="w-8 text-main-dark"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <p class="text-gray-500 font-medium ml-2">
                              {{ standardPricing.title }}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div class="sn-btn">
                        <div class="s-btn-con p-2 mt-3 pb-3">
                          <router-link to="/signup">
                            <button
                              class="py-2 focus:outline-none bg-main-color text-white text-lg font-medium w-full rounded hover:opacity-80"
                              @click="setPlan()"
                            >
                              Sign up
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import Layout from "./Layout";
export default {
  name: "Pricing",
  components: {
    Layout,
  },
  data() {
    return {
      plan: "",
      freePricings: [
        {title: "Up to 10 users", id: "1" },
        {title: "5 projects", id: "2" },
        {title: "1 GB of storage", id: "3" },
        // {title: "Integrations", id: "4" },
        {title: "Custom fields", id: "5" },
        {title: "API and Webhook access", id: "6" },
      ],
      standardPricings: [
        {title: "Unlimited users", id: "1" },
        {title: "Unlimited projects", id: "2" },
        {title: "30 GB of storage", id: "3" },
        // {title: "Integrations", id: "4" },
        {title: "Custom fields", id: "5" },
        {title: "Custom domain", id: "6" },
        {title: "API and Webhook access", id: "7" },
        // {title: "Import and export", id: "8" },
      ],
    };
  },
  methods: {
    getPlan() {
      this.plan = "free";
      localStorage.planType = JSON.stringify({
        id: "1",
        plan: "Free",
      });
    },
    setPlan() {
      this.plan = "Premium";
      localStorage.planType = JSON.stringify({
        id: "2",
        plan: "Premium",
      });
    },
  },
};
</script>
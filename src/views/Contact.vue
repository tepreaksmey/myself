<script setup>
import { reactive } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200, // Speed up animations (400ms for faster effect)
  offset: 100, // Trigger animations a bit sooner
  once: true, // Animation occurs only once
});

const form = reactive({
  name: null,
  phone: null,
  message: null,
});

const submit = () => {
  console.log(form);
};

</script>
<template>
  <section>
    <v-row class="my-12">
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row no-gutters>
          <!-- <v-col cols="12" sm="4">
            <div class="child">
              <h1>{{ ("contact_info") }}</h1>
              <v-btn icon class="mt-10" variant="outlined" color="teal">
                <i class="fas fa-map-marker-alt"></i> </v-btn
              ><br />
              <span style="font-family: fast-hand !important" class="text-md-body-2">{{
                ("location_detail")
              }}</span
              ><br />
              <v-btn icon class="mt-10" variant="outlined" color="teal">
                <i class="fas fa-phone"></i> </v-btn
              ><br />
              <span class="text-md-body-2">098 600 198 </span> <br />

              <v-btn icon class="mt-10" variant="outlined" color="teal">
                <i class="fas fa-envelope"></i> </v-btn
              ><br />
              <span class="text-md-body-2">info@houseofcoders.dev </span> <br />
            </div>
          </v-col> -->
          <v-col cols="12" sm="12">
            <h1 class="mt-8" data-aos="fade-right">Send Your Message</h1>
            <v-divider class="my-4"></v-divider>
            <span
              class="text-md-body-1"
              style="font-family: fast-hand !important"
              data-aos="fade-right"
            >
              You can write a message (question or suggestion) and phone number
              to send to us.
            </span>
            <v-row class="mt-10" data-aos="fade-zoom-in">
              <v-col cols="12" sm="6" class="pa-0">
                <v-text-field
                  class="pr-sm-5 my-2"
                  label="Name"
                  persistent-hint
                  variant="outlined"
                  v-model="form.name"
                  color="teal"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0">
                <v-text-field
                  label="Phone"
                  persistent-hint
                  color="teal"
                  class="pr-sm-5 my-2"
                  v-model="form.phone"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="Message"
                  class="pr-sm-5 my-2"
                  persistent-hint
                  v-model="form.message"
                  variant="outlined"
                  color="teal"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-btn
              @click="submit"
              color="#3bf4fb"
              class="mt-2 text-black"
              data-aos="zoom-in"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
</style>

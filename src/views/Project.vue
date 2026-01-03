<script setup>
import avec from "../assets/avec.png";
import library from "../assets/library.png";
import btbcity from "../assets/btbcity.png";
import cms from "../assets/cms.png";
</script>
<template>
  <section class="team mt-md-12" id="projects">
    <v-row>
      <v-col cols="12" md="3" lg="12" style="margin-top: 50px">
        <div class="mx-auto pa-5" elevation="0">
          <div class="d-flex" data-aos="fade-left">
            <div align="right">
              <div style="width: 15px; height: 120%" class="bg-teal"></div>
            </div>
            <div class="mt-3 ml-5">
              <div
                class="text-h5 font-weight-bold"
                style="font-family: mmool !important"
              >
                Latest Project
              </div>
              <div class="mt-5" style="line-height: normal">
                Use existing management systems with affordable prices as well
                as support.
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="9"
        lg="12"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <v-slide-group
          class="pa-4 mt-8 mx-9"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item>
            <!-- Project 1 -->
            <v-card :class="['ma-4']" width="550" height="350">
              <v-img
                class="align-end text-white"
                height="600"
                :src="cms"
                :width="560"
              >
                <v-card
                  class="mx-5 grey-lighten-1 pb-2"
                  style="opacity: 1.5; background-color: rgba(0, 0, 0, 0.5)"
                  elevation="0"
                >
                  <v-card-text
                    class="font-weight-bold text-center my-5"
                    style="
                      color: #3bf4fb;
                      font-family: Khmer OS Battambang !important;
                      height: 10px;
                      font-size: 16px;
                    "
                    >ទំនាក់ទំនងការធ្វើប្រព័ន្ធតាមវេបសាយ</v-card-text
                  >
                  <!-- <v-card-text style="height: 20px; font-size: 11px;padding:0 0 10px 0;">
                    Can Help for user to easy to store data
                  </v-card-text> -->
                  <v-card-actions class="justify-center">
                    <v-btn variant="flat" color="black">
                      <a
                        href="https://houseofcoders.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white"
                        style="text-decoration: none"
                      >
                        View Details
                      </a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-img>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
            <!-- Project 2 -->
            <v-card :class="['ma-4']" width="550" height="350">
              <v-img
                class="align-end text-white"
                height="600"
                :src="btbcity"
                :width="560"
              >
                <v-card
                  class="mx-5 grey-lighten-1 pb-2"
                  style="opacity: 1.5; background-color: rgba(0, 0, 0, 0.5)"
                  elevation="0"
                >
                  <v-card-text
                    class="font-weight-bold text-center my-5"
                    style="
                      color: #3bf4fb;
                      font-family: Khmer OS Battambang !important;
                      height: 10px;
                      font-size: 16px;
                    "
                    >ប្រព័ន្ធគ្រប់គ្រងព៍ត័មានកិច្ចការរដ្ឋបាល</v-card-text
                  >
                  <!-- <v-card-text style="height: 20px; font-size: 11px;padding:0 0 10px 0;">
                    Can Help for user to easy to store data
                  </v-card-text> -->
                  <v-card-actions class="justify-center">
                    <v-btn variant="flat" color="black">
                      <a
                        href="https://dmk-test.houseofcoders.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white"
                        style="text-decoration: none"
                      >
                        View Details
                      </a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-img>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
            <!-- Project 3 -->
            <v-card :class="['ma-4']" width="550" height="350">
              <v-img
                class="align-end text-white"
                height="600"
                :src="avec"
                :width="560"
              >
                <v-card
                  class="mx-5 grey-lighten-1 pb-2"
                  style="opacity: 1.5; background-color: rgba(0, 0, 0, 0.5)"
                  elevation="0"
                >
                  <v-card-text
                    class="font-weight-bold text-center my-5"
                    style="
                      color: #3bf4fb;
                      font-family: Khmer OS Battambang !important;
                      height: 10px;
                      font-size: 16px;
                    "
                    >ប្រព័ន្ធគ្រប់គ្រងសាលារៀន</v-card-text
                  >
                  <!-- <v-card-text style="height: 20px; font-size: 11px;padding:0 0 10px 0;">
                    Can Help for user to easy to store data
                  </v-card-text> -->
                  <v-card-actions class="justify-center">
                    <v-btn variant="flat" color="black">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white"
                        style="text-decoration: none"
                      >
                        View Details
                      </a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-img>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
            <!-- Project 4 -->
            <v-card :class="['ma-4']" width="550" height="350">
              <v-img
                class="align-end text-white"
                height="600"
                :src="library"
                :width="560"
              >
                <v-card
                  class="mx-5 grey-lighten-1 pb-2"
                  style="opacity: 1.5; background-color: rgba(0, 0, 0, 0.5)"
                  elevation="0"
                >
                  <v-card-text
                    class="font-weight-bold text-center my-5"
                    style="
                      color: #3bf4fb;
                      font-family: Khmer OS Battambang !important;
                      height: 10px;
                      font-size: 16px;
                    "
                    >ប្រព័ន្ធគ្រប់គ្រងបណ្ណាល័យ</v-card-text
                  >
                  <!-- <v-card-text style="height: 20px; font-size: 11px;padding:0 0 10px 0;">
                    Can Help for user to easy to store data
                  </v-card-text> -->
                  <v-card-actions class="justify-center">
                    <v-btn variant="flat" color="black">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white"
                        style="text-decoration: none"
                      >
                        View Details
                      </a>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-img>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </section>
</template>

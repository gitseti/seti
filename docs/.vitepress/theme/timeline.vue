<script setup>
import { ref } from "vue";
const slot = ref(null);
</script>

<template>
  <v-timeline align="start" side="end" line-color=var(--vp-c-brand)>

    <v-timeline-item dot-color=var(--vp-c-brand) fill-dot size="x-small">
      <template v-slot:opposite>
        <strong>2019 - Today</strong>
      </template>
      <div>
        <div class="text-h6"><strong>Software Engineer</strong></div>
        <div class="text-h7"><i>HiveMQ</i></div>
        <p>
            <ul>
                <li>Feature development of the <a href="https://www.hivemq.com/hivemq/mqtt-broker/">HiveMQ Enterprise Broker</a></li>
                <li>Development of <a href="https://github.com/hivemq/mqtt-cli">mqtt-cli</a></li>
                <li>Main skills: Java, MQTT, IoT</li>
            </ul>
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color=var(--vp-c-brand) fill-dot size="x-small">
          <template v-slot:opposite>
            <strong>2018 - 2019</strong>
          </template>
          <div>
            <div class="text-h6"><strong>M. Sc. Computer Science</strong></div>
            <div class="text-h7"><i>University of Applied Sciences Landshut</i></div>
            <p>
                <ul>
                    <li>Final Grade: 1.2 (GPA: 3.8)</li>
                    <li>Master Thesis: Proof of Concept of an MQTT Load Balancer, which is able to load balance up to 1 million MQTT connections and shift connections between broker nodes to allow for zero downtime of the clients in rolling upgrade scenarios</li>
                </ul>
            </p>
          </div>
    </v-timeline-item>

    <v-timeline-item dot-color=var(--vp-c-brand) fill-dot size="x-small">
              <template v-slot:opposite>
                <strong>2015 - 2018</strong>
              </template>
              <div>
                <div class="text-h6"><strong>B. Sc. Computer Science</strong></div>
                <div class="text-h7"><i>University of Applied Sciences Landshut</i></div>
                <p>
                    <ul>
                        <li>Final Grade: 1.2 (GPA: 3.8)</li>
                    </ul>
                </p>
              </div>
    </v-timeline-item>

  </v-timeline>
</template>
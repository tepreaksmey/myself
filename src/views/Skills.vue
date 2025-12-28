<template>
  <div class="skills">
    <SkillBar skill="HTML " :percentage="90" class="d-block" />
    <SkillBar skill="CSS" :percentage="70" class="d-block" />
    <SkillBar skill="JavaScript" :percentage="55" class="d-block" />
    <SkillBar skill="C++" :percentage="70" class="d-block" />
    <SkillBar skill="Vue js" :percentage="80" class="d-block" />
    <SkillBar skill="Laravel" :percentage="60" class="d-block" />
    <SkillBar skill="C# .Net" :percentage="70" class="d-block" />
    <SkillBar skill="Flutter" :percentage="60" class="d-block" />
  </div>
</template>

<script setup>
import SkillBar from "../views/skillBar.vue"; // Make sure the path and .vue extension are correct
</script>

<style scoped>
.skills {
  max-width: 800px; /* Adjusted for a larger container */
  margin: 0 auto;
  color: #fff;
}
</style>

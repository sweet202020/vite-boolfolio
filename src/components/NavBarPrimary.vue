<script>
export default {
    name: 'NavBarPrimary'
}
</script>
<template>

    <ul class="nav nav-tabs" id="navId" role="tablist">
        <li class="nav-item">
            <router-link class="text-uppercase nav-link" :to="{ name: 'home' }">home</router-link>
        </li>

        <li class="nav-item" role="presentation">
            <router-link class="text-uppercase nav-link" :to="{ name: 'project' }">projects</router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="text-uppercase nav-link" :to="{ name: 'contacts' }">contacts</router-link>
        </li>
    </ul>
</template>
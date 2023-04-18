<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1>
            <span v-if="collapsed">
                <div>S</div>
                <div>E</div>
            </span>
            <span v-else>SymBooth Events</span>
        </h1>

        <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/services" icon="fas fa-columns">Services</SidebarLink>
        <SidebarLink to="/page" icon="fas fa-chart-bar">Page</SidebarLink>
        <SidebarLink to="/user" icon="fas fa-users">User</SidebarLink>
        <SidebarLink to="/contact" icon="fas fa-image">Contact</SidebarLink>

        <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>

<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>
color="#3853D8"
<style >
:root {
    --sidebar-bg-color: #3853D8;
    --sidebar-item-hover: #0febff;
    --sidebar-item-active: #f4f5f8;
}
</style>

<style >
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}

.sidebar h1 {
    height: 3em;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>


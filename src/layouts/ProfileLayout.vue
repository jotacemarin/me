<template>
    <div>
        <Sidenav />
        <router-view />
    </div>
</template>

<script>
import Sidenav from '../components/Sidenav';

export const ProfileLayout = {
    name: 'ProfileLayout',

    components: {
        Sidenav
    },
};

export default ProfileLayout;
</script>
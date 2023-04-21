<template>
    <v-card max-width="500" class="mx-auto">
        <v-img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            height="400px" dark>
            <v-row class="fill-height">
                <v-card-title>
                    <br />
                    <v-row>
                        <v-card-text align="center">
                            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                                <v-icon size="24px">
                                    {{ icon }}

                                </v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-row>
                </v-card-title>

                <v-spacer></v-spacer>

                <v-card-title class="white--text pl-12 pt-12">
                    <br />
                    <h2 style="color: antiquewhite;">Prasanna Kulkarni</h2>
                </v-card-title>
            </v-row>
        </v-img>

        <v-list-item v-for="folder in folders" :key="folder.title" :title="folder.title" :subtitle="folder.subtitle">
            <template v-slot:prepend>
                <v-avatar color="white-lighten-1">
                    <v-icon color="indigo">{{ folder.icon }}</v-icon>
                </v-avatar>
            </template>

            <template v-slot:append>
                <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
            </template>
            <br>
            <v-divider inset></v-divider>
        </v-list-item>
        
    </v-card>
</template>

<script>
export default {
    data: () => ({
        icons: ["mdi-chevron-left", "mdi-pencil", "mdi-dots-vertical"],
        picons: ["mdi-cash", "mdi-credit-card", "mdi-google", "mdi-account"],
        folders: [
        {
          subtitle: 'Mobile',
          title: '+91 88053 33613',
          icon: 'mdi-phone'
        },
        {
          subtitle: 'Email',
          title: 'prasannakulkarni471@gmail.com',
          icon: 'mdi-mail'
        },
        {
          subtitle: 'Address',
          title: 'Freshia Apartment, Baner, Pune',
          icon: 'mdi-home'
        },
      ],
    }),
}
</script>

<style lang="scss" scoped></style>
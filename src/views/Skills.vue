<template>
    <section class="resume-section" id="skills">
        <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">
                Programming Languages, Tecnologies & Tools
            </div>
            <ul class="list-inline dev-icons">
                <li
                    v-for="tecnology in tecnologies"
                    class="list-inline-item"
                    :key="tecnology"
                >
                    <i :class="tecnology" />
                </li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
                <li v-for="work in workflow" :key="work.description">
                    <span class="fa-li">
                        <i :class="work.icon" />
                    </span>
                    {{ work.description }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',

    data: () => ({
        tecnologies: [
            'fab fa-html5',
            'fab fa-css3',
            'fab fa-js',
            'fab fa-angular',
            'fab fa-react',
            'fab fa-node',
            'fab fa-sass',
            'fab fa-less',
            'fab fa-wordpress',
            'fab fa-npm',
            'fab fa-java',
            'fab fa-vuejs',
            'fab fa-aws',
            'fab fa-git-alt',
            'fab fa-hotjar',
            'fab fa-linux',
            'fab fa-jenkins',
            'fab fa-jira',
            'fab fa-cc-stripe',
            'fab fa-android',
            'fab fa-docker',
        ],
        workflow: [
            { icon: 'fas fa-check', description: 'Mobile-First, Responsive Design' },
            { icon: 'fas fa-check', description: 'Cross Browser Testing & Debugging' },
            { icon: 'fas fa-check', description: 'Cross Functional Teams' },
            { icon: 'fas fa-check', description: 'Agile Development & Scrum' },
        ],
    }),
};
</script>

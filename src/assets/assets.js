import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import ui from './UI.jpeg'
import send from './send-icon.png'



export const assets = {
    
    code_icon,
    edu_icon,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    ui,
    project_icon,
    send,
};

export const serviceData = [
    { icon: assets.web_icon, title: 'Web Design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'App Design', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui, title: 'UI/UX Design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics Design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Tailwind' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Science in Computer Science and Information Technology' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built multiple frontend projects using React.js, Next.js, Tailwind CSS, etc' }
];

export { send };

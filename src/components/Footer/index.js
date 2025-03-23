import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
    <footer className={styles.footer}>
        <p>Space X - All rights reserved - 2025</p>

        <p>Created by <strong>Ana Beatriz de Sousa Costa</strong></p>

        <div className={styles['footer__links-content']}>
            <a href="https://www.linkedin.com/in/ana-beatriz-costa-758694181/" target="_blank">
                <LinkedInIcon />
                Linkedin
            </a>

            <a href="https://github.com/AnaBiaCosta/localiza-technical-test" target="_blank">
                <GitHubIcon />
                Project Github
            </a>
        </div>
    </footer>
);

export { Footer };

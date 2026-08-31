import Logo from '../componentsLogin/Logo';
/*import AuthTabs from '../componentsLogin/AuthTabs';*/
import LoginForm from '../componentsLogin/LoginForm';
import TestimonialSection from '../componentsLogin/TestimonialSection';
import '../componentsLogin/LoginPage.css';

function LoginPage() {
  return (
    <main>
      <section>
        <Logo />
        
        <div>
          <h1>Welcome back</h1>
          <p>Sign in to manage your appointments and track your queue.</p>
        </div>

       
        <LoginForm />
      </section>

      <TestimonialSection />
    </main>
  );
}

export default LoginPage;






/*import Logo from '../componentsLogin/Logo';
import AuthTabs from '../componentsLogin/AuthTabs';
import LoginForm from '../componentsLogin/LoginForm';
import TestimonialSection from '../componentsLogin/TestimonialSection';
import './LoginPage.css'; 

function LoginPage() {
  return (
    <main className="login-page-container">
      <section className="login-left-section">
        <Logo />
        <div className="login-header-text">
          <h1>Welcome back</h1>
          <p>Sign in to manage your appointments and track your queue.</p>
        </div>
        <AuthTabs />
        <LoginForm />
      </section>

      <TestimonialSection />
    </main>
  );
}

export default LoginPage;*/
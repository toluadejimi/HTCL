import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {
  LayoutDashboard, FileText, CreditCard, UserRound, LifeBuoy, LogOut, Menu,
  CheckCircle2, Clock3, Upload, ChevronRight, ShieldCheck, Search,
  Eye, Download, Users, Settings, BarChart3, Bell, Pencil, Globe2,
  FileCheck2, ChevronDown
} from 'lucide-react';
import './styles.css';

const apps = [
  {ref:'HCS-2026-000184', name:'Tolu Adejimi', email:'tolu@example.com', phone:'+234 801 234 5678', amount:'USD 100,000', purpose:'Study Abroad', destination:'Canada / University of Toronto', status:'Under Review', date:'13 Sep 2026'}
];
const steps = ['Personal info', 'Application Details', 'Documents', 'Review & Pay'];

function Logo({small}) {
  return <div className={small ? 'logo sm' : 'logo'}>H</div>;
}

function Brand({light}) {
  return (
    <div className="brand" style={light ? {color:'#fff'} : undefined}>
      <Logo />
      <div>
        <strong>Highlight Consulting</strong>
        <span style={light ? {color:'#9eb0c8'} : undefined}>Services Limited</span>
      </div>
    </div>
  );
}

function Status({children}) {
  const cls = children.toLowerCase().replaceAll(' ', '-');
  return <span className={'status ' + cls}><i /> {children}</span>;
}

function Field({label, value, placeholder, wide, textarea, type='text', onChange, options}) {
  return (
    <label className={wide ? 'field wide' : 'field'}>
      <span>{label}</span>
      {textarea ? (
        <textarea placeholder={placeholder} defaultValue={value} onChange={onChange} />
      ) : options ? (
        <select defaultValue={value || ''} onChange={onChange}>
          {!value && placeholder && <option value="">{placeholder}</option>}
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} defaultValue={value || ''} placeholder={placeholder} onChange={onChange} />
      )}
    </label>
  );
}

function PublicHeader({page, setPage}) {
  const [open, setOpen] = useState(false);
  const links = [['home','Home'],['about','About'],['services','Services'],['faq','FAQ'],['contact','Contact']];
  return (
    <header className="public-header">
      <button onClick={() => setPage('home')}><Brand /></button>
      <nav>
        {links.map(([id, label]) => (
          <button key={id} className={page===id ? 'active' : ''} onClick={() => setPage(id)}>{label}</button>
        ))}
      </nav>
      <div className="header-actions">
        <button className="btn link" onClick={() => setPage('login')}>Login</button>
        <button className="btn primary" onClick={() => setPage('signup')}>Apply Now</button>
        <button className="menu-btn" onClick={() => setOpen(!open)}><Menu size={20} /></button>
      </div>
    </header>
  );
}

function Footer({setPage}) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand light />
          <p>Secure Proof of Funds applications for study, travel, immigration, and business.</p>
        </div>
        <div>
          <h4>Company</h4>
          <button onClick={() => setPage('about')}>About</button>
          <button onClick={() => setPage('services')}>Services</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </div>
        <div>
          <h4>Portal</h4>
          <button onClick={() => setPage('signup')}>Create account</button>
          <button onClick={() => setPage('login')}>Customer login</button>
          <button onClick={() => setPage('verify')}>Verify a document</button>
        </div>
        <div>
          <h4>Support</h4>
          <button onClick={() => setPage('faq')}>FAQ</button>
          <button onClick={() => setPage('admin')}>Admin access</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Highlight Consulting Services Limited</span>
        <span>Demo portal — not a live financial product</span>
      </div>
    </footer>
  );
}

function PublicShell({page, setPage, children}) {
  return <>
    <PublicHeader page={page} setPage={setPage} />
    {children}
    <Footer setPage={setPage} />
  </>;
}

function Home({setPage}) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Your Trusted Partner for Proof of Funds</h1>
          <p>Fast. Secure. Reliable. Apply for your Proof of Funds with confidence and track your application every step of the way.</p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => setPage('signup')}>Apply Now</button>
            <button className="btn ghost" onClick={() => setPage('about')}>Learn More</button>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/hero-building.png" alt="Glass office tower at twilight" />
          <div className="hero-cards">
            <div className="glass-card"><div className="icon"><ShieldCheck size={18} /></div><div><b>Secure Application</b><span>Your information is protected</span></div></div>
            <div className="glass-card"><div className="icon"><Clock3 size={18} /></div><div><b>Track in Real Time</b><span>Get updates at every stage</span></div></div>
            <div className="glass-card"><div className="icon"><LifeBuoy size={18} /></div><div><b>Expert Support</b><span>We're here to help</span></div></div>
          </div>
        </div>
      </section>
      <section className="trust">
        <div><b>500+</b><span>Applications Processed</span></div>
        <div><b>98%</b><span>Customer Satisfaction</span></div>
        <div><b>Fast</b><span>Turnaround Time</span></div>
        <div><b>Trusted</b><span>By Individuals & Businesses</span></div>
      </section>
      <section className="section">
        <div className="section-head">
          <h2>How the portal works</h2>
          <p>A single secure path from application to verified documentation.</p>
        </div>
        <div className="steps-grid">
          <div className="step-card"><div className="step-num">1</div><h3>Create your account</h3><p>Join the portal and start a Proof of Funds request in minutes.</p></div>
          <div className="step-card"><div className="step-num">2</div><h3>Submit documents</h3><p>Upload identification, address proof, and supporting files securely.</p></div>
          <div className="step-card"><div className="step-num">3</div><h3>Track and receive</h3><p>Follow every review stage until your document is ready to share.</p></div>
        </div>
      </section>
      <section className="section alt">
        <div className="split-media">
          <img src="/images/about-office.png" alt="Highlight consulting office" />
          <div className="split-copy">
            <h2>Built for global opportunities</h2>
            <p>Students, families, and businesses use Highlight Consulting to present trusted financial documentation for study, immigration, and institutional requests.</p>
            <ul className="checklist">
              <li><CheckCircle2 size={18} color="#1a6dff" /> Confidential document handling</li>
              <li><CheckCircle2 size={18} color="#1a6dff" /> Clear application timelines</li>
              <li><CheckCircle2 size={18} color="#1a6dff" /> Public verification for recipients</li>
            </ul>
            <button className="btn primary" onClick={() => setPage('about')}>About the firm</button>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <img src="/images/skyline.png" alt="City skyline at dusk" />
        <div>
          <h2>Ready to start your application?</h2>
          <p>Create an account and submit your Proof of Funds request with guided steps and live tracking.</p>
          <button className="btn primary" onClick={() => setPage('signup')}>Apply Now</button>
        </div>
      </section>
    </>
  );
}

function About({setPage}) {
  return (
    <section className="section">
      <div className="split-media reverse">
        <div className="split-copy">
          <h2>About Highlight Consulting</h2>
          <p>Highlight Consulting Services Limited helps individuals and organisations prepare, submit, and track Proof of Funds documentation with a clear, professional process.</p>
          <p>This portal is a working prototype of the customer and admin experience: application, review, payment, and public verification.</p>
          <button className="btn primary" onClick={() => setPage('signup')}>Start an application</button>
        </div>
        <img src="/images/about-office.png" alt="Consulting office interior" />
      </div>
    </section>
  );
}

function Services({setPage}) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Services</h2>
        <p>Everything you need to request, manage, and verify Proof of Funds documents.</p>
      </div>
      <div className="split-media" style={{marginBottom:48}}>
        <img src="/images/services-documents.png" alt="Financial documents on a desk" />
        <div className="split-copy">
          <h2>Trusted financial documentation</h2>
          <p>From first submission to recipient verification, the portal keeps every file and status in one place.</p>
        </div>
      </div>
      <div className="cards-3">
        <div className="info-card"><Globe2 size={22} color="#1a6dff" /><h3>Proof of Funds</h3><p>Request documentation for study, travel, immigration, or business use.</p></div>
        <div className="info-card"><FileCheck2 size={22} color="#1a6dff" /><h3>Document verification</h3><p>Recipients can confirm a reference number on a public verification page.</p></div>
        <div className="info-card"><BarChart3 size={22} color="#1a6dff" /><h3>Application tracking</h3><p>Customers and staff see the same timeline from submitted to completed.</p></div>
      </div>
      <div style={{textAlign:'center', marginTop:36}}>
        <button className="btn primary" onClick={() => setPage('signup')}>Apply Now</button>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ['Who can apply?', 'Individuals and businesses can start a Proof of Funds application from the customer portal.'],
    ['How long does review take?', 'Most applications move from submission to first review within one to three working days in this demo flow.'],
    ['How do recipients verify a document?', 'They enter the reference number on the public verification page to confirm authenticity.'],
    ['Is this a live banking product?', 'No. This is a UI prototype. Production use needs a secure backend, payments, and verified records.']
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="section-head">
        <h2>Frequently asked questions</h2>
        <p>Quick answers before you start an application.</p>
      </div>
      <div className="faq">
        {items.map(([q,a], i) => (
          <div className="faq-item" key={q}>
            <button onClick={() => setOpen(open===i ? -1 : i)}>{q} <ChevronDown size={16} /></button>
            {open===i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Contact</h2>
        <p>Reach the team about an application, verification, or partnership enquiry.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-side">
          <h2 style={{marginTop:0}}>Highlight Consulting</h2>
          <p>We respond to portal enquiries during business hours.</p>
          <b>Email</b>
          <p>hello@highlightconsulting.demo</p>
          <b>Phone</b>
          <p>+234 800 000 0000</p>
        </div>
        <div className="card">
          <div className="form-grid">
            <Field label="Full name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" />
            <Field label="Message" placeholder="How can we help?" wide textarea />
          </div>
          <div className="form-actions">
            <button className="btn primary">Send message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signup({setPage}) {
  return (
    <div className="auth-wrap">
      <form className="auth-form" onSubmit={e => {e.preventDefault(); setPage('apply');}}>
        <h1>Create Your Account</h1>
        <p>Join our platform to apply for Proof of Funds and track your application.</p>
        <div className="form-grid">
          <Field label="Full Name" placeholder="Tolu Adejimi" wide />
          <Field label="Email Address" placeholder="you@example.com" wide />
          <Field label="Phone Number" placeholder="+234 801 234 5678" wide />
          <Field label="Password" type="password" placeholder="Create a password" wide />
        </div>
        <label className="check">
          <input type="checkbox" defaultChecked />
          <span>I agree to the Terms & Conditions and Privacy Policy</span>
        </label>
        <button className="btn primary block" type="submit">Create Account</button>
        <p className="muted-link">Already have an account? <button className="btn link" onClick={() => setPage('login')}>Login</button></p>
      </form>
      <aside className="auth-panel">
        <img src="/images/signup-building.png" alt="Glass tower at night" />
        <div>
          <h2>Secure<br/>Simple<br/>Reliable</h2>
          <p>Supporting your global opportunities with trusted financial documentation.</p>
        </div>
      </aside>
    </div>
  );
}

function Login({setPage}) {
  return (
    <div className="auth-wrap">
      <form className="auth-form" onSubmit={e => {e.preventDefault(); setPage('dashboard');}}>
        <h1>Welcome back</h1>
        <p>Sign in to manage your Proof of Funds applications.</p>
        <div className="form-grid">
          <Field label="Email Address" placeholder="tolu@example.com" wide />
          <Field label="Password" type="password" placeholder="Enter your password" wide />
        </div>
        <div style={{height:22}} />
        <button className="btn primary block" type="submit">Login</button>
        <p className="muted-link">New here? <button className="btn link" onClick={() => setPage('signup')}>Create an account</button></p>
        <p className="muted-link"><button className="btn link" onClick={() => setPage('admin')}>Sign in as admin</button></p>
      </form>
      <aside className="auth-panel">
        <img src="/images/signup-building.png" alt="Glass tower at night" />
        <div>
          <h2>Track every<br/>application<br/>in one place</h2>
          <p>Review status, documents, and payment history from your dashboard.</p>
        </div>
      </aside>
    </div>
  );
}

function FlowHeader({setPage}) {
  return (
    <header className="flow-header">
      <button onClick={() => setPage('dashboard')}><Brand /></button>
      <button className="avatar" onClick={() => setPage('dashboard')}>TA</button>
    </header>
  );
}

function Stepper({step}) {
  return (
    <div className="stepper">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div className={'step ' + (i<step ? 'done ' : '') + (i===step ? 'current' : '')}>
            <i>{i<step ? <CheckCircle2 size={14} /> : i+1}</i>
            <span>{s}</span>
          </div>
          {i<steps.length-1 && <div className={'step-line ' + (i<step ? 'done' : '')} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Apply({setPage}) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [pay, setPay] = useState('paystack');
  const [uploaded, setUploaded] = useState({});
  const titles = ['Personal Information', 'Application Details', 'Upload Supporting Documents', 'Review & Payment'];
  const subs = [
    'Provide your personal details.',
    'Provide details of your proof of funds request',
    'Upload the required documents to complete your application.',
    'Confirm your details and pay to submit your application.'
  ];

  if (submitted) {
    return (
      <>
        <FlowHeader setPage={setPage} />
        <div className="page narrow">
          <div className="card" style={{textAlign:'center', padding:'48px 32px'}}>
            <div className="success-icon"><CheckCircle2 size={38} /></div>
            <h2>Application Submitted</h2>
            <p className="sub">Your application has been received and is now under review.</p>
            <div className="fee" style={{justifyContent:'center', gap:24}}>
              <div><span>Application Reference</span><b>HCS-2026-000185</b></div>
            </div>
            <div className="form-actions" style={{justifyContent:'center', border:0}}>
              <button className="btn primary" onClick={() => setPage('track')}>Track Application</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <FlowHeader setPage={setPage} />
      <div className="page narrow">
        <Stepper step={step} />
        <div className="card">
          <h2>{titles[step]}</h2>
          <p className="sub">{subs[step]}</p>

          {step===0 && (
            <div className="form-grid">
              <Field label="Full Name" value="Tolu Adejimi" />
              <Field label="Date of Birth" placeholder="dd / mm / yyyy" />
              <Field label="Nationality" placeholder="Select nationality" options={['Nigerian','Ghanaian','Kenyan','British','Canadian']} />
              <Field label="ID Type" placeholder="Select ID type" options={['Passport','NIN','Driver’s License']} />
              <Field label="ID Number" placeholder="Enter ID number" />
              <Field label="Phone Number" value="+234 801 234 5678" />
              <Field label="Email Address" value="tolu@example.com" wide />
            </div>
          )}

          {step===1 && (
            <div className="form-grid">
              <Field label="Amount Required" value="100,000" />
              <Field label="Currency" value="USD" options={['USD','GBP','EUR','CAD','NGN']} />
              <Field label="Purpose of Funds" placeholder="Select purpose" options={['Study Abroad','Immigration','Business','Travel','Medical']} wide />
              <Field label="Destination Country / Institution" placeholder="e.g. Canada / University of Toronto" wide />
              <Field label="Intended Use" placeholder="Briefly explain the purpose of the funds" wide textarea />
            </div>
          )}

          {step===2 && (
            <div className="uploads">
              {[
                ['passport','Passport Photograph','JPG, JPEG, PNG (Max 5MB)'],
                ['id','Valid ID (Passport / NIN / Driver’s License)','PDF, JPEG, PNG (Max 5MB)'],
                ['address','Proof of Address','PDF, JPEG, PNG (Max 5MB)'],
                ['extra','Additional Documents (Optional)','PDF, JPEG, PNG (Max 5MB)']
              ].map(([id, title, hint]) => (
                <div className={'upload' + (uploaded[id] ? ' done' : '')} key={id}>
                  <div className="upload-icon">{uploaded[id] ? <CheckCircle2 size={19} /> : <FileText size={19} />}</div>
                  <div><b>{title}</b><span>{uploaded[id] ? 'File attached' : hint}</span></div>
                  <button className="btn ghost sm" onClick={() => setUploaded({...uploaded, [id]: true})}>
                    <Upload size={14} /> {uploaded[id] ? 'Replace' : 'Upload'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {step===3 && (
            <div className="review-stack">
              <div className="review-box">
                <div className="top"><h3>Personal Information</h3><button className="btn link" onClick={() => setStep(0)}><Pencil size={14} /></button></div>
                <div className="review-grid">
                  <div><span>Full Name</span><b>Tolu Adejimi</b></div>
                  <div><span>Email</span><b>tolu@example.com</b></div>
                  <div><span>Phone</span><b>+234 801 234 5678</b></div>
                </div>
              </div>
              <div className="review-box">
                <div className="top"><h3>Application Details</h3><button className="btn link" onClick={() => setStep(1)}><Pencil size={14} /></button></div>
                <div className="review-grid">
                  <div><span>Amount</span><b>USD 100,000</b></div>
                  <div><span>Purpose</span><b>Study Abroad</b></div>
                  <div><span>Destination</span><b>Canada / University of Toronto</b></div>
                  <div><span>Intended Use</span><b>Tuition and living expenses</b></div>
                </div>
              </div>
              <div className="fee">
                <div><b>Application Fee</b><span>Pay with Paystack or Flutterwave</span></div>
                <strong>₦50,000</strong>
              </div>
              <div className="pay-methods">
                <button className={'pay-method' + (pay==='paystack' ? ' active' : '')} onClick={() => setPay('paystack')}>
                  <b>Paystack</b><span>Card, bank, USSD</span>
                </button>
                <button className={'pay-method' + (pay==='flutterwave' ? ' active' : '')} onClick={() => setPay('flutterwave')}>
                  <b>Flutterwave</b><span>Card, transfer, wallet</span>
                </button>
              </div>
            </div>
          )}

          <div className="form-actions">
            {step>0 && <button className="btn ghost" onClick={() => setStep(step-1)}>Back</button>}
            <button className="btn primary" onClick={() => step===3 ? setSubmitted(true) : setStep(step+1)}>
              {step===3 ? 'Pay and Submit' : 'Next Step'} {step<3 && <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CustomerLayout({active, setPage, children}) {
  const items = [
    ['dashboard','Dashboard', LayoutDashboard],
    ['applications','My Applications', FileText],
    ['payments','Payments', CreditCard],
    ['documents','Documents', FileText],
    ['profile','Profile', UserRound],
    ['support','Support', LifeBuoy]
  ];
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button onClick={() => setPage('dashboard')}><Brand light /></button>
        {items.map(([id, label, Icon]) => (
          <button key={id} className={active===id ? 'active' : ''} onClick={() => setPage(id)}>
            <Icon size={18} />{label}
          </button>
        ))}
        <button className="logout" onClick={() => setPage('home')}><LogOut size={18} />Logout</button>
      </aside>
      <div className="app-main">
        <div className="app-top"><div className="avatar">TA</div></div>
        {children}
      </div>
    </div>
  );
}

function Dashboard({setPage}) {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Welcome, Tolu</h1>
          <p>Track and manage your Proof of Funds applications.</p>
        </div>
        <button className="btn primary" onClick={() => setPage('apply')}>Apply Now</button>
      </div>
      <div className="stats">
        <div className="stat"><b>1</b><span>Total Applications</span></div>
        <div className="stat warn"><b>1</b><span>In Progress</span></div>
        <div className="stat ok"><b>0</b><span>Approved</span></div>
        <div className="stat bad"><b>0</b><span>Rejected</span></div>
      </div>
      <section className="card">
        <div className="card-head">
          <div><h2>Recent Applications</h2></div>
          <button className="btn link" onClick={() => setPage('applications')}>View All <ChevronRight size={15} /></button>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Ref. Number</th><th>Amount</th><th>Purpose</th><th>Status</th><th>Date</th><th /></tr></thead>
            <tbody>
              {apps.map(a => (
                <tr key={a.ref}>
                  <td><b>{a.ref}</b></td><td>{a.amount}</td><td>{a.purpose}</td>
                  <td><Status>{a.status}</Status></td><td>{a.date}</td>
                  <td><button className="round" onClick={() => setPage('track')}><Eye size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Applications({setPage}) {
  return (
    <div className="page">
      <div className="page-head">
        <div><h1>My Applications</h1><p>All your Proof of Funds applications in one place.</p></div>
        <button className="btn primary" onClick={() => setPage('apply')}>New Application</button>
      </div>
      <div className="card">
        <div className="filters">
          <div className="search"><Search size={16} /><input placeholder="Search reference number..." /></div>
          <button className="btn ghost">All Statuses</button>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Reference</th><th>Amount</th><th>Destination</th><th>Status</th><th>Submitted</th><th /></tr></thead>
            <tbody>
              {apps.map(a => (
                <tr key={a.ref}>
                  <td><b>{a.ref}</b></td><td>{a.amount}</td><td>{a.destination}</td>
                  <td><Status>{a.status}</Status></td><td>{a.date}</td>
                  <td><button className="btn ghost sm" onClick={() => setPage('track')}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SimplePanel({title, text}) {
  return (
    <div className="page">
      <div className="page-head"><div><h1>{title}</h1><p>{text}</p></div></div>
      <div className="card"><p className="sub" style={{margin:0}}>This section is part of the portal prototype and will connect to live records in production.</p></div>
    </div>
  );
}

function Track({setPage}) {
  return (
    <>
      <FlowHeader setPage={setPage} />
      <div className="page narrow">
        <div className="page-head">
          <div><h1>Application Timeline</h1><p>HCS-2026-000184</p></div>
          <Status>Under Review</Status>
        </div>
        <div className="card timeline">
          <Timeline done title="Application Submitted" date="13 Sep 2026, 10:24 AM" text="Your application has been received." />
          <Timeline current title="Under Review" date="13 Sep 2026, 02:15 PM" text="Our team is reviewing your documents." />
          <Timeline title="Additional Information" text="Pending" />
          <Timeline title="Processing" text="Pending" />
          <Timeline title="Approved" text="Pending" />
          <Timeline title="Completed" text="Pending" />
        </div>
        <div className="notice"><Bell size={18} /><span>You will be notified via email/SMS at every stage.</span></div>
      </div>
    </>
  );
}

function Timeline({done, current, title, date, text}) {
  return (
    <div className="timeline-row">
      <div className={'dot ' + (done ? 'done' : '') + (current ? ' current' : '')}>
        {(done || current) && <CheckCircle2 size={16} />}
      </div>
      <div><b>{title}</b>{date && <small>{date}</small>}<span>{text}</span></div>
    </div>
  );
}

function AdminLayout({active, setPage, children}) {
  const items = [
    ['admin','Dashboard', LayoutDashboard],
    ['admin-apps','Applications', FileText],
    ['admin-customers','Customers', Users],
    ['admin-payments','Payments', CreditCard],
    ['admin-docs','Documents', FileText],
    ['admin-staff','Staff', Users],
    ['admin-settings','Settings', Settings]
  ];
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button onClick={() => setPage('admin')}><Brand light /></button>
        {items.map(([id, label, Icon]) => (
          <button key={id} className={active===id ? 'active' : ''} onClick={() => setPage(id==='admin-apps' ? 'admin-review' : id)}>
            <Icon size={18} />{label}
          </button>
        ))}
        <button className="logout" onClick={() => setPage('home')}><LogOut size={18} />Logout</button>
      </aside>
      <div className="app-main">
        <div className="app-top"><div className="avatar">AD</div></div>
        {children}
      </div>
    </div>
  );
}

function AdminHome({setPage}) {
  return (
    <div className="page">
      <div className="page-head">
        <div><h1>Admin Dashboard</h1><p>Overview of applications and system activity.</p></div>
        <button className="btn ghost">Last 30 Days</button>
      </div>
      <div className="stats">
        <div className="stat"><b>56</b><span>Total Applications</span></div>
        <div className="stat warn"><b>18</b><span>Under Review</span></div>
        <div className="stat ok"><b>32</b><span>Approved</span></div>
        <div className="stat bad"><b>6</b><span>Rejected</span></div>
      </div>
      <div className="admin-grid">
        <div className="card">
          <div className="card-head"><div><h2>Applications Overview</h2><p>Monthly application volume.</p></div><BarChart3 size={18} /></div>
          <div className="bars">
            {[35,48,42,65,55,72,61,78,88].map((h,i) => (
              <div key={i}><div style={{height:h+'%'}} /><span>{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'][i]}</span></div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-head"><div><h2>Recent Applications</h2></div></div>
          {apps.map(a => (
            <button className="mini-row" key={a.ref} onClick={() => setPage('admin-review')} style={{width:'100%'}}>
              <div><b>{a.ref}</b><span>{a.name} · {a.amount}</span></div>
              <Status>{a.status}</Status>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminReview() {
  const [tab, setTab] = useState('Overview');
  const a = apps[0];
  return (
    <div className="page">
      <div className="page-head">
        <div><h1>Application Details</h1><p>{a.ref}</p></div>
        <button className="btn primary">Update Status</button>
      </div>
      <div className="card">
        <div className="tabs">
          {['Overview','Documents','Notes','Audit Log'].map(t => (
            <button key={t} className={tab===t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        {tab==='Overview' && (
          <div className="detail-grid">
            <div><span>Reference Number</span><b>{a.ref}</b></div>
            <div><span>Applicant</span><b>{a.name}</b></div>
            <div><span>Email</span><b>{a.email}</b></div>
            <div><span>Phone</span><b>{a.phone}</b></div>
            <div><span>Amount</span><b>{a.amount}</b></div>
            <div><span>Purpose</span><b>{a.purpose}</b></div>
            <div><span>Destination</span><b>{a.destination}</b></div>
            <div><span>Status</span><b>{a.status}</b></div>
          </div>
        )}
        {tab==='Documents' && <p className="sub">Passport photograph, valid ID, and proof of address are available for authorised review.</p>}
        {tab==='Notes' && <p className="sub">No internal notes have been added yet.</p>}
        {tab==='Audit Log' && <p className="sub">Application created 13 Sep 2026 · Moved to Under Review 13 Sep 2026.</p>}
      </div>
    </div>
  );
}

function Verify({setPage}) {
  const [verified, setVerified] = useState(false);
  return (
    <>
      <PublicHeader page="verify" setPage={setPage} />
      <div className="verify-page">
        <div className="verify-card card">
          {!verified ? (
            <>
              <Brand />
              <h1>Verify Proof of Funds Document</h1>
              <p>Enter the reference number to verify the authenticity of a document.</p>
              <div className="verify-input">
                <input defaultValue="HCS-2026-000184" placeholder="e.g. HCS-2026-000184" />
                <button className="btn primary" onClick={() => setVerified(true)}>Verify</button>
              </div>
            </>
          ) : (
            <>
              <div className="success-icon"><CheckCircle2 size={38} /></div>
              <h1>Document Verified</h1>
              <div className="verify-details">
                <div className="verify-row"><span>Reference Number</span><b>HCS-2026-000184</b></div>
                <div className="verify-row"><span>Applicant Name</span><b>T*** Adejimi</b></div>
                <div className="verify-row"><span>Amount</span><b>USD 100,000</b></div>
                <div className="verify-row"><span>Purpose</span><b>Study Abroad</b></div>
                <div className="verify-row"><span>Issue Date</span><b>13 Sep 2026</b></div>
                <div className="verify-row"><span>Status</span><Status>Valid</Status></div>
              </div>
              <p className="sub">This document is a genuine record from Highlight Consulting Services Limited.</p>
              <button className="btn ghost"><Download size={16} /> Download Verification</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const customer = ['dashboard','applications','payments','documents','profile','support'];
  const adminPages = ['admin','admin-review','admin-customers','admin-payments','admin-docs','admin-staff','admin-settings'];

  if (page==='signup') return <><PublicHeader page={page} setPage={setPage} /><Signup setPage={setPage} /></>;
  if (page==='login') return <><PublicHeader page={page} setPage={setPage} /><Login setPage={setPage} /></>;
  if (page==='apply') return <Apply setPage={setPage} />;
  if (page==='track') return <Track setPage={setPage} />;
  if (page==='verify') return <Verify setPage={setPage} />;

  if (customer.includes(page)) {
    return (
      <CustomerLayout active={page} setPage={setPage}>
        {page==='dashboard' && <Dashboard setPage={setPage} />}
        {page==='applications' && <Applications setPage={setPage} />}
        {page==='payments' && <SimplePanel title="Payments" text="Application fees and receipts." />}
        {page==='documents' && <SimplePanel title="Documents" text="Files attached to your applications." />}
        {page==='profile' && <SimplePanel title="Profile" text="Your contact and identity details." />}
        {page==='support' && <SimplePanel title="Support" text="Get help with an application." />}
      </CustomerLayout>
    );
  }

  if (adminPages.includes(page)) {
    return (
      <AdminLayout active={page==='admin-review' ? 'admin-apps' : page} setPage={setPage}>
        {page==='admin' && <AdminHome setPage={setPage} />}
        {page==='admin-review' && <AdminReview />}
        {page==='admin-customers' && <SimplePanel title="Customers" text="Registered portal users." />}
        {page==='admin-payments' && <SimplePanel title="Payments" text="Fee collection overview." />}
        {page==='admin-docs' && <SimplePanel title="Documents" text="Files submitted for review." />}
        {page==='admin-staff' && <SimplePanel title="Staff" text="Internal user access." />}
        {page==='admin-settings' && <SimplePanel title="Settings" text="Portal configuration." />}
      </AdminLayout>
    );
  }

  return (
    <PublicShell page={page} setPage={setPage}>
      {page==='home' && <Home setPage={setPage} />}
      {page==='about' && <About setPage={setPage} />}
      {page==='services' && <Services setPage={setPage} />}
      {page==='faq' && <FAQ />}
      {page==='contact' && <Contact />}
    </PublicShell>
  );
}

createRoot(document.getElementById('root')).render(<App />);

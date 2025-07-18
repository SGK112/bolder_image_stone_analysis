// Simple icon components as replacements
const TrendingUp = () => <span>📈</span>;
const Target = () => <span>🎯</span>;
const BarChart3 = () => <span>📊</span>;
const AlertTriangle = () => <span>⚠️</span>;
const Smartphone = () => <span>📱</span>;
const Users = () => <span>👥</span>;
const Star = () => <span>⭐</span>;
const Search = () => <span>🔍</span>;
const Globe = () => <span>🌐</span>;
const Zap = () => <span>⚡</span>;
const CheckCircle = () => <span>✅</span>;
const ArrowRight = () => <span>→</span>;
const X = () => <span>✕</span>;

// Simple component replacements
const Badge = ({ children, className }) => <span className={`px-3 py-1 rounded-full text-sm font-medium ${className}`}>{children}</span>;
const Button = ({ children, className, size, variant, onClick, ...props }) => (
  <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
);
const Card = ({ children, className }) => <div className={`bg-white rounded-2xl shadow-md p-8 ${className || ''}`}>{children}</div>;
const CardHeader = ({ children, className }) => <div className={`mb-6 ${className || ''}`}>{children}</div>;
const CardTitle = ({ children, className }) => <h3 className={`text-xl font-bold ${className || ''}`}>{children}</h3>;
const CardDescription = ({ children, className }) => <p className={`text-gray-600 mt-2 ${className || ''}`}>{children}</p>;
const CardContent = ({ children, className }) => <div className={className || ''}>{children}</div>;

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <button 
            onClick={onClose}
            className="float-right text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            <X />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = ({ formType, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare form data for Basin
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('company', formData.company);
    formDataToSubmit.append('projectType', formData.projectType);
    formDataToSubmit.append('budget', formData.budget);
    formDataToSubmit.append('timeline', formData.timeline);
    formDataToSubmit.append('message', formData.message);
    formDataToSubmit.append('formType', formType);
    formDataToSubmit.append('source', 'Remodely LLC - Boulder Image Stone Digital Analysis Presentation');
    
    try {
      const response = await fetch('https://usebasin.com/f/c8330e822cab', {
        method: 'POST',
        body: formDataToSubmit
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        console.log('Form submitted successfully to Basin');
        
        // Reset form and close modal after success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            message: ''
          });
          onClose();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or contact Remodely LLC directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-4">Your message has been successfully sent to Remodely LLC.</p>
        <p className="text-sm text-slate-500">We'll contact you within 24 hours to discuss your digital marketing transformation and how we can help Boulder Image Stone dominate the Phoenix stone market.</p>
      </div>
    );
  }
  
  const getFormTitle = () => {
    switch(formType) {
      case 'transformation':
        return 'Transform Your Stone Business with Remodely LLC';
      case 'analysis':
        return 'Download Complete Digital Analysis Report';
      case 'consultation':
        return 'Schedule Your Free Strategy Consultation';
      default:
        return 'Connect with Remodely LLC';
    }
  };
  
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">{getFormTitle()}</h2>
      <p className="text-slate-600 mb-8">Connect with our digital marketing experts at Remodely LLC. We'll get back to you within 24 hours with a customized strategy for your stone business.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden fields for tracking */}
        <input type="hidden" name="_subject" value={`Remodely LLC - ${getFormTitle()}`} />
        <input type="hidden" name="_redirect" value="https://remodely.com/thank-you" />
        <input type="hidden" name="_template" value="basic" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-700 font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-stone-700 font-medium mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-stone-700 font-medium mb-2">Company/Organization</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
              placeholder="Your company name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-700 font-medium mb-2">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
            >
              <option value="">Select service type</option>
              <option value="website-redesign">Website Redesign & Development</option>
              <option value="seo-optimization">SEO & Local Search Optimization</option>
              <option value="digital-marketing">Complete Digital Marketing Strategy</option>
              <option value="lead-generation">Lead Generation & Conversion Optimization</option>
              <option value="complete-transformation">Full Digital Transformation</option>
              <option value="consultation">Free Strategy Consultation</option>
            </select>
          </div>
          
          <div>
            <label className="block text-stone-700 font-medium mb-2">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="planning-phase">Just planning</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-stone-700 font-medium mb-2">Budget Range</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-30k">$15,000 - $30,000</option>
            <option value="30k-50k">$30,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
            <option value="discuss">Let's discuss</option>
          </select>
        </div>
        
        <div>
          <label className="block text-stone-700 font-medium mb-2">Tell us about your goals</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
            placeholder="What are your main digital marketing goals? What challenges are you facing with online visibility and lead generation? How can Remodely LLC help transform your stone business?"
          ></textarea>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          <Button 
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="bg-slate-200 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-300 transition-all duration-300"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

function App() {
  const [activeModal, setActiveModal] = React.useState(null);
  
  const openModal = (formType) => {
    setActiveModal(formType);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Boulder Image Stone</h1>
              <p className="text-slate-600">Digital Analysis by Remodely LLC</p>
            </div>
            <div className="text-right">
              <Badge className="bg-blue-100 text-blue-800 border border-blue-200 mb-1">
                Confidential Analysis
              </Badge>
              <p className="text-sm text-slate-500">Prepared by Remodely LLC</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-200 to-slate-100 bg-clip-text text-transparent">
              Unlock Your Digital Potential
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital analysis by Remodely LLC reveals significant opportunities to improve search rankings, 
              increase leads, and strengthen your position as Phoenix's premier stone specialists.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 inline-block">
              <p className="text-blue-200 font-semibold">🏆 Expert Analysis by Remodely LLC</p>
              <p className="text-slate-300 text-sm">Specialized in Stone & Construction Industry Digital Marketing</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/20">
                <div className="bg-gradient-to-br from-red-600 to-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Current Rankings</h3>
                <p className="text-4xl font-bold text-red-300 mb-2">#7-9</p>
                <p className="text-slate-300">Quartz & granite searches</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/20">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Target Rankings</h3>
                <p className="text-4xl font-bold text-blue-300 mb-2">Top 3</p>
                <p className="text-slate-300">Within 6-9 months</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/20">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BarChart3 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">B2B Lead Growth</h3>
                <p className="text-4xl font-bold text-stone-200 mb-2">300%</p>
                <p className="text-stone-300">Contractor inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Critical SEO & Technical Findings</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive analysis by Remodely LLC reveals specific technical issues limiting Boulder Image Stone's search visibility</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-red-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-red-800 text-xl">Technical SEO Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-red-700 space-y-3">
                  <li className="flex items-center gap-2">• Multiple H1 tags on homepage</li>
                  <li className="flex items-center gap-2">• Missing H1 on About Us page</li>
                  <li className="flex items-center gap-2">• 3 images without alt text</li>
                  <li className="flex items-center gap-2">• Missing meta descriptions</li>
                  <li className="flex items-center gap-2">• Mixed content warnings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-blue-800 text-xl">Search Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-blue-700 space-y-3">
                  <li className="flex items-center gap-2">• "Quartz countertops Phoenix": Position 7</li>
                  <li className="flex items-center gap-2">• "Granite stone suppliers": Position 9</li>
                  <li className="flex items-center gap-2">• "Natural stone Phoenix": Not top 10</li>
                  <li className="flex items-center gap-2">• Behind 6+ major competitors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-slate-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-slate-800 text-xl">B2B Market Position</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex items-center gap-2">• Primary customer: The Yard AZ</li>
                  <li className="flex items-center gap-2">• Wholesale business model</li>
                  <li className="flex items-center gap-2">• Serves fabricators & contractors</li>
                  <li className="flex items-center gap-2">• Need enhanced B2B tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-emerald-800 text-xl">Current Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-emerald-700 space-y-3">
                  <li className="flex items-center gap-2">• 5.0-star customer ratings</li>
                  <li className="flex items-center gap-2">• Premium quality products</li>
                  <li className="flex items-center gap-2">• No bookmatch/shade fees</li>
                  <li className="flex items-center gap-2">• Strong local relationships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Analysis & Deep Insights */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Competitive Market Analysis</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">Deep insights into Boulder Image Stone's position against major Phoenix competitors and strategic opportunities</p>
          </div>

          {/* Competitive Landscape */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 mb-4">🏆 Boulder Image Stone Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <div>
                      <strong>Family-Owned Excellence:</strong> Personal touch vs. corporate competitors like MSI and Arizona Tile
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <div>
                      <strong>Exclusive Collections:</strong> Eternos, Bolder, 3D Image, and Mikado collections offer unique differentiation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <div>
                      <strong>Premium Customer Service:</strong> 5-star ratings with personalized guidance (Ellie, Julian, Samantha team)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <div>
                      <strong>No Hidden Fees:</strong> No bookmatch or shade match fees unlike larger competitors
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <div>
                      <strong>Local Market Focus:</strong> Deep Phoenix market knowledge and relationships
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-800 mb-4">⚡ Competitive Gaps Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <strong>Superior Stone & Cabinet:</strong> Ranking #1 and #5 with "widest selection" messaging and cabinet integration
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <strong>MSI Surfaces:</strong> #2 and #7 rankings, large showroom presence, "hundreds of colors"
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <strong>The Stone Collection:</strong> #1 and #2 positions, "Arizona's Best Selection" branding
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <strong>The Yard AZ:</strong> #3 ranking with online inventory, pricing, sophisticated e-commerce
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <strong>Aracruz RE:</strong> #2 and #9 with multiple locations and live inventory browsing
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specific Website Analysis */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-stone-800 mb-8 text-center">Boulder Image Stone Website Deep Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">🎨 Product Collections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-stone-700">
                    <div><strong>Eternos Collection:</strong> 15+ premium quartz options including Vitrum Classic, Mont Blanc, Taj Mahal</div>
                    <div><strong>Bolder Collection:</strong> Signature branded quartz with unique patterns</div>
                    <div><strong>3D Image Collection:</strong> Innovative textured surfaces (Colorado Gold, Emerald, Garnet)</div>
                    <div><strong>Mikado Collection:</strong> Sophisticated patterns (Arctic Panda, Black Jasper, Cemento)</div>
                    <div><strong>Natural Stone:</strong> Onyx, Quartzite, Granite, Marble with premium options</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">📍 Business Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-stone-700">
                    <div><strong>Location:</strong> 4101 W Van Buren St. Suite 3, Phoenix, AZ 85009</div>
                    <div><strong>Hours:</strong> Mon-Fri 8am-5pm, Sat 10am-1pm, Sun Closed</div>
                    <div><strong>Contact:</strong> (602) 484-7700</div>
                    <div><strong>Target Market:</strong> Fabricators, contractors, designers, homeowners</div>
                    <div><strong>Website:</strong> Designed by Sacchi Design Agency</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-stone-800">💡 Opportunity Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-stone-700">
                    <div><strong>SEO:</strong> Target "quartz Phoenix", "granite countertops", "stone fabrication"</div>
                    <div><strong>Content:</strong> Showcase installation process, customer stories, collection details</div>
                    <div><strong>Features:</strong> Online inventory, sample requests, virtual consultations</div>
                    <div><strong>Mobile:</strong> Responsive product galleries, touch-friendly navigation</div>
                    <div><strong>B2B:</strong> Contractor pricing, bulk ordering, project management</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategic Recommendations */}
          <div className="bg-gradient-to-r from-slate-800 to-blue-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Strategic Digital Transformation Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold mb-2">Phase 1: Foundation</h4>
                <p className="text-sm text-stone-200">SEO optimization, mobile responsiveness, site speed improvements</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h4 className="font-bold mb-2">Phase 2: Enhancement</h4>
                <p className="text-sm text-stone-200">Product visualization, virtual showroom, sample request system</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold mb-2">Phase 3: B2B Platform</h4>
                <p className="text-sm text-stone-200">Contractor portal, bulk ordering, project management tools</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold mb-2">Phase 4: Innovation</h4>
                <p className="text-sm text-stone-200">AR visualization, AI recommendations, mobile app development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Strategy & Opportunities */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">SEO Strategy & Market Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">Comprehensive analysis reveals massive untapped potential in Phoenix stone market SEO</p>
          </div>

          {/* SEO Tools Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Essential SEO Tools & Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
                <CardHeader>
                  <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-emerald-800">Free SEO Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-emerald-700 space-y-2">
                    <li>• Google Search Console</li>
                    <li>• Google My Business Insights</li>
                    <li>• Google Keyword Planner</li>
                    <li>• PageSpeed Insights</li>
                    <li>• Schema Markup Validator</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-800">Premium Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• SEMrush/Ahrefs ($200-500/mo)</li>
                    <li>• BrightLocal (Local SEO)</li>
                    <li>• Screaming Frog (Technical)</li>
                    <li>• Moz Local (Citations)</li>
                    <li>• Whitespark (Local Tracking)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader>
                  <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-800">Analytics Suite</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• Google Analytics 4</li>
                    <li>• Google Tag Manager</li>
                    <li>• Call tracking software</li>
                    <li>• Heat mapping tools</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* High-Opportunity Keywords */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Undervalued Keywords (Competitor Gaps)</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-xl bg-gradient-to-br from-yellow-50 to-orange-100 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800 text-xl">🎯 Primary Targets (High ROI)</CardTitle>
                  <CardDescription className="text-orange-700">High value, lower competition opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-orange-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div><strong>"no bookmatch fee Phoenix"</strong> - Unique advantage</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div><strong>"quartz countertops Phoenix showroom"</strong> - Local intent</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div><strong>"Italian marble Phoenix AZ"</strong> - Premium positioning</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div><strong>"best stone prices Phoenix Valley"</strong> - Price advantage</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div><strong>"Eternos collection Phoenix"</strong> - Exclusive products</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-green-50 to-emerald-100 border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-xl">💎 Long-tail Goldmines</CardTitle>
                  <CardDescription className="text-emerald-700">Specific, high-conversion searches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-emerald-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1" />
                      <div><strong>"white onyx bathroom vanity Phoenix"</strong></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1" />
                      <div><strong>"Calacatta viola marble kitchen island"</strong></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1" />
                      <div><strong>"quartzite vs granite Phoenix"</strong></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1" />
                      <div><strong>"stone care maintenance Phoenix"</strong></div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1" />
                      <div><strong>"luxury stone showroom West Phoenix"</strong></div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Competitor Gap Analysis */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Major Competitor Gaps (Opportunities)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardHeader>
                  <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-red-800 text-lg">Educational Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-700 mb-3"><strong>Gap:</strong> No comprehensive stone care guides</p>
                  <p className="text-sm text-red-700"><strong>Opportunity:</strong> Become Phoenix stone authority</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
                <CardHeader>
                  <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-indigo-800 text-lg">Video SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-700 mb-3"><strong>Gap:</strong> Minimal video optimization</p>
                  <p className="text-sm text-indigo-700"><strong>Opportunity:</strong> Dominate YouTube + video snippets</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                <CardHeader>
                  <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-teal-800 text-lg">B2B Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-teal-700 mb-3"><strong>Gap:</strong> No architect/contractor content</p>
                  <p className="text-sm text-teal-700"><strong>Opportunity:</strong> Capture professional searches</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                <CardHeader>
                  <div className="bg-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-pink-800 text-lg">Local Design Authority</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pink-700 mb-3"><strong>Gap:</strong> No Phoenix-specific design content</p>
                  <p className="text-sm text-pink-700"><strong>Opportunity:</strong> Own desert modern trends</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ROI Projections */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">SEO Strategy ROI Projections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50-75%</div>
                <div className="text-blue-200">Organic Traffic Increase</div>
                <div className="text-sm text-blue-300 mt-2">Within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">300%</div>
                <div className="text-blue-200">Local Pack Visibility</div>
                <div className="text-sm text-blue-300 mt-2">Google My Business optimization</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$25K+</div>
                <div className="text-blue-200">Monthly Revenue Increase</div>
                <div className="text-sm text-blue-300 mt-2">From improved lead generation</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() => openModal('analysis')}
              >
                Get Complete SEO Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Premium Digital Solutions</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">Tailored strategies to showcase your stone mastery and attract premium clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-stone-50">
              <CardHeader className="pb-6">
                <div className="bg-gradient-to-br from-stone-600 to-stone-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-stone-800">SEO for Stone Specialists</CardTitle>
                <CardDescription className="text-stone-600 text-lg leading-relaxed">
                  Dominate searches for premium quartz, granite, marble, and natural stone in Phoenix
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Stone-specific keyword optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Local contractor targeting
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Premium product showcasing
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Technical stone expertise content
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-amber-50">
              <CardHeader className="pb-6">
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-stone-800">Luxury Stone Showcase</CardTitle>
                <CardDescription className="text-stone-600 text-lg leading-relaxed">
                  Visual platform highlighting your premium collections and craftsmanship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    High-resolution stone galleries
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Virtual showroom experience
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Trade professional portal
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Project inspiration galleries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-emerald-50">
              <CardHeader className="pb-6">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-stone-800">Premium Brand Marketing</CardTitle>
                <CardDescription className="text-stone-600 text-lg leading-relaxed">
                  Strategic positioning to attract architects, designers, and luxury homeowners
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Luxury market positioning
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Designer partnership programs
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Showroom experience marketing
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    Premium project showcases
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Investment Options</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Choose the package that best fits your growth objectives and budget
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">SEO Foundation</CardTitle>
                <CardDescription className="text-gray-300">
                  Essential optimizations for immediate impact
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  $2,500
                  <span className="text-lg font-normal text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Technical SEO fixes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Mobile optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Local SEO setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic content optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Monthly reporting
                  </li>
                </ul>
                <Button 
                  className="w-full bg-white text-slate-900 hover:bg-gray-100"
                  onClick={() => openModal('consultation')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="bg-gradient-to-b from-blue-500/20 to-indigo-600/20 backdrop-blur-lg border-blue-400/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">Growth Accelerator</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive digital transformation
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  $4,500
                  <span className="text-lg font-normal text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Everything in SEO Foundation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    B2B portal development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Content marketing (4 articles/month)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Social media management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Lead generation optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Bi-weekly strategy calls
                  </li>
                </ul>
                <Button 
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => openModal('transformation')}
                >
                  Choose This Plan
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Market Domination</CardTitle>
                <CardDescription className="text-gray-300">
                  Complete digital ecosystem transformation
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  $7,500
                  <span className="text-lg font-normal text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Everything in Growth Accelerator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom mobile app development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced analytics & CRM
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Partnership marketing program
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Weekly strategy sessions
                  </li>
                </ul>
                <Button 
                  className="w-full bg-white text-slate-900 hover:bg-gray-100"
                  onClick={() => openModal('consultation')}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              All Remodely LLC packages include setup, training, and ongoing support
            </p>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => openModal('consultation')}
            >
              Schedule Free Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced ROI Projection with Specific Data */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Projected Business Impact</h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto">Data-driven projections by Remodely LLC based on Boulder Image Stone's unique market position and comprehensive competitive analysis</p>
          </div>

          {/* ROI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardHeader>
                <div className="text-4xl font-bold text-emerald-600 mb-2">$500K+</div>
                <CardTitle className="text-emerald-800">Annual Revenue Increase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-emerald-700">Conservative estimate based on 200% lead increase and average project value of $8,500</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-xl bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <div className="text-4xl font-bold text-amber-600 mb-2">350%</div>
                <CardTitle className="text-amber-800">Search Visibility Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-700">Moving from position 7-9 to top 3 for "Phoenix quartz countertops" and related terms</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-xl bg-gradient-to-br from-stone-50 to-stone-100">
              <CardHeader>
                <div className="text-4xl font-bold text-stone-600 mb-2">85%</div>
                <CardTitle className="text-stone-800">Mobile Traffic Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-700">Capturing mobile users who currently bounce due to poor mobile experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <CardTitle className="text-blue-800">New B2B Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700">Enhanced contractor portal attracting Phoenix-area fabricators and designers</p>
              </CardContent>
            </Card>
          </div>

          {/* Specific Collection Opportunities */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Collection-Specific Marketing Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Eternos Collection</h4>
                <p className="text-sm text-slate-600">Target luxury homeowners and high-end designers with premium positioning</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Bolder Collection</h4>
                <p className="text-sm text-slate-600">Leverage unique branded designs to differentiate from Arizona Tile and MSI</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h4 className="font-bold text-stone-800 mb-2">3D Image Collection</h4>
                <p className="text-sm text-stone-600">Market innovative textures to architects and contemporary designers</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h4 className="font-bold text-stone-800 mb-2">Mikado Collection</h4>
                <p className="text-sm text-stone-600">Target modern commercial projects and sophisticated residential builds</p>
              </div>
            </div>
          </div>

          {/* Market Positioning Strategy */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-stone-800 mb-8 text-center">Competitive Positioning Strategy</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-stone-800">🥇 Beat Arizona Tile</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-stone-700">
                    <li>• Develop superior online inventory system</li>
                    <li>• Create more intuitive visualizer than "Just Imagine"</li>
                    <li>• Emphasize personal service vs. corporate feel</li>
                    <li>• Target "family-owned Phoenix stone supplier"</li>
                    <li>• Highlight no bookmatch fees advantage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-stone-800">🏢 Compete with MSI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-stone-700">
                    <li>• Focus on local expertise and relationships</li>
                    <li>• Highlight exclusive collections not available at MSI</li>
                    <li>• Leverage customer testimonials and 5-star service</li>
                    <li>• Target "boutique stone experience Phoenix"</li>
                    <li>• Emphasize personalized design consultation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-stone-800">🎯 Market Dominance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-stone-700">
                    <li>• Own "premium quartz Phoenix" searches</li>
                    <li>• Establish thought leadership in stone trends</li>
                    <li>• Build contractor loyalty program</li>
                    <li>• Create designer partnership network</li>
                    <li>• Develop signature installation showcase</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-amber-200/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Stone Business?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with Remodely LLC to elevate Boulder Image Stone as the undisputed leader in Phoenix's luxury stone market
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-300/20"
                onClick={() => openModal('transformation')}
              >
                🏆 Partner with Remodely LLC
                <ArrowRight />
              </Button>
              <Button 
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/40 hover:bg-white/30 transition-all duration-300"
                onClick={() => openModal('analysis')}
              >
                📊 Download Complete Analysis
              </Button>
            </div>
            <div className="mt-8 text-blue-200 text-sm">
              ⭐ Complimentary consultation with Remodely LLC digital marketing experts
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            Confidential digital strategy presentation prepared by Remodely LLC for Boulder Image Stone • Specialized Digital Marketing for Stone & Construction Industries • {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>

      {/* Modal for forms */}
      <Modal isOpen={!!activeModal} onClose={closeModal}>
        <ContactForm formType={activeModal} onClose={closeModal} />
      </Modal>
    </div>
  )
}


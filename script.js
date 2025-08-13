document.addEventListener('DOMContentLoaded', () => {
  const languageSwitcher = document.getElementById('language-switch');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const searchButton = document.getElementById('search-button');
  const productSearch = document.getElementById('product-search');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const quickViewBtns = document.querySelectorAll('.quick-view-btn');
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  const cartModal = document.getElementById('cart-modal');
  const quickViewModal = document.getElementById('quick-view-modal');
  const closeModalBtns = document.querySelectorAll('.close');
  const checkoutBtn = document.getElementById('checkout-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dots = document.querySelectorAll('.dot');
  const contactForm = document.getElementById('contact-form');

  // Extended translations
  const translations = {
    sw: {
      home: 'Nyumbani',
      services: 'Huduma',
      galleryNav: 'Picha',
      ProductNav: 'Bidhaa',
      testimonials: 'Ushuhuda',
      contact: 'Wasiliana',
      heroTitle: 'Karibu Mama Mboga Digital',
      heroDesc: 'Tunakuwezesha kuuza mboga na matunda kwa njia ya kidigitali.',
      heroBtn: 'Jifunze Zaidi',
      servicesTitle: 'Huduma Zetu',
      service1: '📦 Usafirishaji wa bidhaa',
      service2: '📱 Uuzaji kupitia simu (USSD/SMS)',
      service3: '💳 Malipo ya kidigitali',
      service4: '🌽 Uuzaji wa mahindi safi',
      galleryTitle: 'Picha za Bidhaa Zetu',
      productVeg: 'Mboga Fresh',
      galleryFruit: 'Matunda Safi',
      galleryMaize: 'Mahindi Safi',
      footerContact: 'Wasiliana nasi kupitia WhatsApp au SMS.',
      searchPlaceholder: 'Tafuta bidhaa...',
      catAll: 'Zote',
      catVegetables: 'Mboga',
      catFruits: 'Matunda',
      catCereals: 'Nafaka',
      viewBtn: 'Angalia',
      addCartBtn: 'Ongeza',
      cartTitle: 'Kikapu cha Ununuzi',
      cartTotal: 'Jumla:',
      checkoutBtn: 'Lipia Sasa',
      testimonialsTitle: 'Maoni ya Wateja',
      testimonial1Text: 'Huduma ya Mama Mboga ni ya hali ya juu. Mboga zao ni safi na bei ni nafuu. Napendekeza sana!',
      testimonial1Author: '- Mwanaisha J.',
      testimonial2Text: 'Huduma ya kuagiza kupitia simu ni rahisi sana. Nilipata matunda yangu yakiwa fresh na kwa wakati.',
      testimonial2Author: '- Baraka T.',
      testimonial3Text: 'Mahindi yao ni matamu sana! Na huduma ya usafirishaji ni ya kuridhisha kabisa.',
      testimonial3Author: '- Fatuma M.',
      contactTitle: 'Wasiliana Nasi',
      location: 'Dar es Salaam, Tanzania',
      formName: 'Jina',
      formPhone: 'Namba ya Simu',
      formMessage: 'Ujumbe',
      formSubmit: 'Tuma Ujumbe',
      formSuccess: 'Ujumbe wako umepokelewa! Tutawasiliana nawe hivi karibuni.',
      formError: 'Kuna tatizo! Tafadhali jaribu tena.',
      footerAbout: 'Kuhusu Sisi',
      footerAboutText: 'Tunauza mboga na matunda safi kwa njia ya kidigitali, ili kukuwezesha kupata chakula bora kwa urahisi.',
      footerQuickLinks: 'Viungo vya Haraka',
      footerContactText: 'Wasiliana nasi kupitia WhatsApp au SMS.',
      addedToCart: 'Bidhaa imeongezwa kwenye kikapu!',
      removeFromCart: 'Ondoa',
      emptyCart: 'Kikapu chako hakina bidhaa.',
    },
    en: {
      home: 'Home',
      services: 'Services',
      galleryNav: 'Gallery',
      ProductNav: 'Products',
      testimonials: 'Testimonials',
      contact: 'Contact',
      heroTitle: 'Welcome to Mama Mboga Digital',
      heroDesc: 'Empowering you to sell vegetables and fruits digitally.',
      heroBtn: 'Learn More',
      servicesTitle: 'Our Services',
      service1: '📦 Product delivery',
      service2: '📱 Mobile selling (USSD/SMS)',
      service3: '💳 Digital payments',
      service4: '🌽 Fresh maize sales',
      galleryTitle: 'Our Product Gallery',
      productVeg: 'Fresh Vegetables',
      galleryFruit: 'Fresh Fruits',
      galleryMaize: 'Fresh Maize',
      footerContact: 'Contact us via WhatsApp or SMS.',
      searchPlaceholder: 'Search products...',
      catAll: 'All',
      catVegetables: 'Vegetables',
      catFruits: 'Fruits',
      catCereals: 'Cereals',
      viewBtn: 'View',
      addCartBtn: 'Add',
      cartTitle: 'Shopping Cart',
      cartTotal: 'Total:',
      checkoutBtn: 'Checkout Now',
      testimonialsTitle: 'Customer Testimonials',
      testimonial1Text: 'Mama Mboga service is top-notch. Their vegetables are fresh and affordable. Highly recommend!',
      testimonial1Author: '- Mwanaisha J.',
      testimonial2Text: 'Ordering through the phone is very easy. I received my fruits fresh and on time.',
      testimonial2Author: '- Baraka T.',
      testimonial3Text: 'Their maize is very sweet! And the delivery service is excellent.',
      testimonial3Author: '- Fatuma M.',
      contactTitle: 'Contact Us',
      location: 'Dar es Salaam, Tanzania',
      formName: 'Name',
      formPhone: 'Phone Number',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formSuccess: 'Your message has been received! We will contact you soon.',
      formError: 'There was a problem! Please try again.',
      footerAbout: 'About Us',
      footerAboutText: 'We sell fresh vegetables and fruits digitally, enabling you to access quality food easily.',
      footerQuickLinks: 'Quick Links',
      footerContactText: 'Contact us via WhatsApp or SMS.',
      addedToCart: 'Product added to cart!',
      removeFromCart: 'Remove',
      emptyCart: 'Your cart is empty.',
    }
  };

  // Product data
  const products = {
    vegetables: {
      name: { sw: 'Mboga Fresh', en: 'Fresh Vegetables' },
      price: 200,
      description: { 
        sw: 'Mboga mboga za kijani zenye afya zilizovunwa leo. Zinakuja moja kwa moja kutoka kwa wakulima wa kienyeji.', 
        en: 'Fresh healthy green vegetables harvested today. They come straight from local farmers.' 
      },
      image: 'image/vegetables.jpeg'
    },
    fruits: {
      name: { sw: 'Matunda Safi', en: 'Fresh Fruits' },
      price: 250,
      description: { 
        sw: 'Matunda matamu na yenye afya yaliyoiva kikamilifu. Mazuri kwa afya na ladha.', 
        en: 'Sweet and healthy fully ripened fruits. Great for health and taste.' 
      },
      image: 'image/fruits.jpeg'
    },
    cereals: {
      name: { sw: 'Mahindi Safi', en: 'Fresh Maize' },
      price: 180,
      description: { 
        sw: 'Mahindi mabichi yaliyovunwa leo. Mazuri kwa kuchemsha au kubanika.', 
        en: 'Fresh maize harvested today. Great for boiling or roasting.' 
      },
      image: 'image/maize.jpeg'
    }
  };

  // Shopping cart
  let cart = [];
  let currentLanguage = 'sw';
  let currentSlide = 0;

  // Function to set language
  function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
    
    // Update search placeholder
    if (productSearch) {
      productSearch.placeholder = translations[lang].searchPlaceholder;
    }
  }

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Navigation smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      // Close mobile menu if open
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
      
      // Add active class
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
      
      // Smooth scroll to section
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Search functionality
  if (searchButton && productSearch) {
    searchButton.addEventListener('click', () => {
      const searchQuery = productSearch.value.toLowerCase();
      if (searchQuery.trim() === '') return;
      
      // Filter gallery items based on search query
      galleryItems.forEach(item => {
        const productType = item.getAttribute('data-product');
        const productName = products[productType].name[currentLanguage].toLowerCase();
        
        if (productName.includes(searchQuery)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      
      // Reset category buttons
      categoryBtns.forEach(btn => btn.classList.remove('active'));
      categoryBtns[0].classList.add('active');
    });
    
    // Search on Enter key
    productSearch.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });
  }

  // Category filtering
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      categoryBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-category');
      
      // Filter gallery items
      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-product') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Quick view functionality
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const productType = btn.getAttribute('data-product');
      const product = products[productType];
      
      // Populate quick view modal
      const quickViewContent = document.getElementById('quick-view-content');
      quickViewContent.innerHTML = `
        <div class="quick-view-details">
          <div class="quick-view-image">
            <img src="${product.image}" alt="${product.name[currentLanguage]}">
          </div>
          <div class="quick-view-info">
            <h3>${product.name[currentLanguage]}</h3>
            <p class="quick-view-price">${product.price} TZS</p>
            <p class="quick-view-description">${product.description[currentLanguage]}</p>
            <button class="add-to-cart-btn" data-product="${productType}" data-price="${product.price}">
              <i class="fas fa-shopping-cart"></i> 
              ${translations[currentLanguage].addCartBtn}
            </button>
          </div>
        </div>
      `;
      
      // Show modal
      quickViewModal.style.display = 'block';
      
      // Add event listener to the newly created add to cart button
      quickViewContent.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(productType);
      });
    });
  });

  // Add to cart functionality
  function addToCart(productType) {
    const product = products[productType];
    
    // Check if product already in cart
    const existingItemIndex = cart.findIndex(item => item.type === productType);
    
    if (existingItemIndex > -1) {
      // Update quantity if already in cart
      cart[existingItemIndex].quantity++;
    } else {
      // Add new item to cart
      cart.push({
        type: productType,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
    
    // Show notification
    showNotification(translations[currentLanguage].addedToCart);
    
    // Update cart display
    updateCartDisplay();
  }

  // Initialize add to cart buttons
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const productType = btn.getAttribute('data-product');
      addToCart(productType);
    });
  });

  // Update cart display
  function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total-amount');
    
    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="empty-cart">${translations[currentLanguage].emptyCart}</p>`;
      totalElement.textContent = '0';
      return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      cartHTML += `
        <div class="cart-item">
          <div class="cart-item-info">
            <p>${item.name[currentLanguage]}</p>
            <small>${item.price} TZS × ${item.quantity}</small>
          </div>
          <div class="cart-item-actions">
            <span class="cart-item-total">${itemTotal} TZS</span>
            <button class="remove-item" data-index="${index}">
              ${translations[currentLanguage].removeFromCart}
            </button>
          </div>
        </div>
      `;
    });
    
    cartItems.innerHTML = cartHTML;
    totalElement.textContent = `${total} TZS`;
    
    // Initialize remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        cart.splice(index, 1);
        updateCartDisplay();
      });
    });
  }

  // Show cart modal
  document.querySelector('.hero .btn').addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        alert('Asante kwa ununuzi wako! Tutawasiliana nawe hivi karibuni.');
        cart = [];
        updateCartDisplay();
        cartModal.style.display = 'none';
      }
    });
  }

  // Close modals
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cartModal.style.display = 'none';
      quickViewModal.style.display = 'none';
    });
  });

  // Close modal on outside click
  window.addEventListener('click', e => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === quickViewModal) quickViewModal.style.display = 'none';
  });

  // Testimonial slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  
  function showSlide(index) {
    testimonialSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = currentSlide - 1;
      if (newIndex < 0) newIndex = testimonialSlides.length - 1;
      showSlide(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
      let newIndex = currentSlide + 1;
      if (newIndex >= testimonialSlides.length) newIndex = 0;
      showSlide(newIndex);
    });
  }
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });
  
  // Auto-advance testimonial slider
  setInterval(() => {
    let newIndex = currentSlide + 1;
    if (newIndex >= testimonialSlides.length) newIndex = 0;
    showSlide(newIndex);
  }, 5000);

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Normally you would send this data to a server
      // But for demo purposes, we'll just show a success message
      
      // Show success message
      const formStatus = document.getElementById('form-status');
      formStatus.textContent = translations[currentLanguage].formSuccess;
      formStatus.className = 'form-status success';
      
      // Reset form
      contactForm.reset();
    });
  }

  // Show notification
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Append to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Remove after timeout
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Add styles for notification
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #2c6e49;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      transform: translateX(150%);
      transition: transform 0.3s ease;
      z-index: 1002;
    }
    
    .notification.show {
      transform: translateX(0);
    }
    
    .quick-view-details {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .quick-view-image {
      flex: 1;
      min-width: 200px;
    }
    
    .quick-view-image img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
    
    .quick-view-info {
      flex: 2;
      min-width: 250px;
    }
    
    .quick-view-info h3 {
      color: #2c6e49;
      margin-bottom: 10px;
      font-size: 1.5rem;
    }
    
    .quick-view-price {
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 15px;
      color: #2c6e49;
    }
    
    .quick-view-description {
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    
    .cart-item-info small {
      color: #666;
    }
    
    .cart-item-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 5px;
    }
    
    .cart-item-total {
      font-weight: bold;
      color: #2c6e49;
    }
    
    .remove-item {
      background: none;
      border: none;
      color: #e74c3c;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0;
    }
    
    .empty-cart {
      text-align: center;
      padding: 20px;
      color: #666;
    }
  `;
  document.head.appendChild(style);

  // Initialize AOS-like animations
  function initAnimations() {
    const animatedElements = [
      ...document.querySelectorAll('.hero-text'),
      ...document.querySelectorAll('.hero-image'),
      ...document.querySelectorAll('.service'),
      ...document.querySelectorAll('.gallery-item'),
      ...document.querySelectorAll('.testimonial-content'),
      ...document.querySelectorAll('.contact-form h2'),
      ...document.querySelectorAll('.contact-info'),
      ...document.querySelectorAll('.contact-form-element')
    ];
    
    const animateElement = (el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight - 100;
      
      if (isVisible) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    };
    
    // Add initial styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
      .hero-text, .hero-image, .service, .gallery-item, 
      .testimonial-content, .contact-form h2, .contact-info, .contact-form-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
    `;
    document.head.appendChild(animationStyle);
    
    // Check elements on scroll
    window.addEventListener('scroll', () => {
      animatedElements.forEach(animateElement);
    });
    
    // Initial check
    setTimeout(() => {
      animatedElements.forEach(animateElement);
    }, 300);
  }
  
  // Initialize animations
  initAnimations();

  // Language switch event
  languageSwitcher.addEventListener('change', e => {
    setLanguage(e.target.value);
  });

  // Init language on page load
  setLanguage('sw');
});

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Project is Wired');

const anchorTags = document.getElementsByTagName('a');
const items = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];

for (let i = 0; i < items.length; i++) {
  const tag = anchorTags[i];
  const item = items[i];
  tag.classList.add('italic');
  tag.textContent = item;
}

const logoImg = document.querySelector('#logo-img');
logoImg.src = 'http://localhost:9000/img/logo.png';

const mainCtaHeading = document.querySelector('h1');
mainCtaHeading.textContent = 'DOM Is Awesome';

const mainCtaButton = document.querySelector('button');
mainCtaButton.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'http://localhost:9000/img/cta.png';

const txtContentInsideTopContent = document.querySelectorAll('.top-content .text-content');
const firstDiv = txtContentInsideTopContent[0];
const headingFirst = firstDiv.querySelector('h4');
console.log(headingFirst);
headingFirst.textContent = 'Features';
const pFirst = firstDiv.querySelector('p');
pFirst.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
const secondDiv = txtContentInsideTopContent[1];
const secondHeading = secondDiv.querySelector('h4');
secondHeading.textContent = 'About';
const pSecond = secondDiv.querySelector('p');
pSecond.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.querySelector('#middle-img');
midImg.src = 'http://localhost:9000/img/accent.png';

const textContentInsideBottomContent = document.querySelectorAll('.bottom-content .text-content');

const firstBottomDiv = textContentInsideBottomContent[0];
const firstBottomHeading = firstBottomDiv.querySelector('h4');
firstBottomHeading.textContent = 'Services';
const firstBottomP = firstBottomDiv.querySelector('p');
firstBottomP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const secondBottomDiv = textContentInsideBottomContent[1];
const secondBottomHeading = secondBottomDiv.querySelector('h4');
secondBottomHeading.textContent = 'Product';
const secondBottomP = secondBottomDiv.querySelector('p');
secondBottomP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const thirdBottomDiv = textContentInsideBottomContent[2];
const thirdBottomHeading = thirdBottomDiv.querySelector('h4');
thirdBottomHeading.textContent = 'Vision';
const thirdBottomP = thirdBottomDiv.querySelector('p');
thirdBottomP.textContent= 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const sectionClassContact = document.querySelector('.contact');
const contactHeading = sectionClassContact.querySelector('h4');
contactHeading.textContent = 'Contact';

const contactPAll = sectionClassContact.querySelectorAll('p');
const contactFirstP = contactPAll[0];
contactFirstP.textContent = '123 Way 456 Street Somewhere, USA';
const contactSecondP = contactPAll[1];
contactSecondP.textContent = '1 (888) 888-8888';
const contactThirdP = contactPAll[2];
contactThirdP.textContent = 'sales@greatidea.io';

const anchorTagInFooterTag = document.querySelector('footer a');
anchorTagInFooterTag.classList = 'bold';
anchorTagInFooterTag.textContent = siteContent.footer.copyright;


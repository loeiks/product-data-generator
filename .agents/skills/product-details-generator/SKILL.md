---
name: Product Details Generator
description: Creating SEO optimized product details such as meta title, description, long/short descriptions etc.
---

Use this skill to generate detailed and highly optimized rich product details for WordPress WooCommerce platform.

As agent; you are a SEO specialist with technical knowledge too who is capable of optimizing product pages for highest conversation rates and SEO optimization to satisfy users and creating best possible experience for all types of visitors.

## Optimization Goals

- Search Engine Result Optimization (SEO)
- AI Optimizations (For AI BOTs)
- Accessibility Optimizations
- Marketing Optimizations
- User Experience Optimizations

Optimize these in mind, main goal is to rank high in SERPs, let AI bots get what they need so providing rich content, marketing optimizations to boost conversation rates and UX optimization to provide all important must have details for users to let them find whatever needed on the product page.

## Generated Fields

You are creating these sections;

1. Product Title aka Meta Title (SEO Title)
2. Meta Description
3. Short Description
4. Rich Description (Product Page Body)
5. Slug (*optional)

### Rules of Fields

#### Product Title (Meta Title)

This is highly optimized for UX and SEO to let user understand the product (what is it) and rank high in SERPs (SEO optimized).

- Keep it under 580px or 60 characters. DO NOT exceed 60 characters. (Google cuts titls after 580px reached)
- Focus on potential keywords of product, and known titles of product in other places on the internet.
- Plain text.

> This is placed into Rank Math plugin meta title field and product title field in WordPress.

#### Meta Description

This is SERP only description optimize it for SEO, so page gets higher rank on Google etc. This won't be seen by users on actual page but will be shown on SERPs so optimize based on these.

- Keep it under 920px or 160 characters. DO NOT exceed 160 characters.
- Plain text.

> This is placed into Rank Math plugin meta description field in WordPress.

#### Short Description

This is shown under product name, it shouldn't be too long or too short should provide general and important information about the product. It should focus on UX rather than SEO.

- Keep it under 60-70 words. (can exceed by ~10 words)
- Plain text.

> This is placed into "product short description" field in WordPress.

#### Rich Product Description

This is the most important part in the product page, this place is HTML content not plain text this section should provide all details about the product where we showcase the product.

- Keep this as long as possible without adding anything useless, or not cared by customer.
- Use HTML not inline styles or any CSS, plain HTML tags.
- Images will be manually added if needed later by the user.
- You can benefit from HTML tables, or other HTML tags to make it look better and optimize for SEO.
- Don't use H1 or H2 use H3 for titles, H1 used by product title, H2 used by other sections H3 is best for here.
- Don't use HTML tags like `div`, `article` etc. which is not needed.
- Prefer tables instead of lists when it makes better sense, otherwise you can use unordered or ordered lists too.
- User information shared by user and information inside the pages that is shared by the user in the prompt.

> This is placed into "product description" field in WordPress.

#### Slug

This is generated when the product title contains non latin characters, this will happen when you are generating content for other languages such as Turkish, Greek etc.

To get a translated version use the script in `greek-latin-translator.js` it takes the input and outputs the latin version.

- Currently you will be working with Greek mostly so this script is Greek only.
- Hypens and spaces will be handled by WordPress so feel free to use the script output directly.

> This is used as product slug.

## Reply Format

Write your answer into two different file:

- PRODUCT.md
- product.html

Provide non-html details in the markdown file (everything except rich description), and put rich description as HTML into HTML file directly to make it ready to copy-paste.

Example PRODUCT.md format:
```md
<meta-product-title>

<meta-description>

<short-description>

<slug>
```

Example PRODUCT.md file;
```md
jRL Forte Pro Επαγγελματικό Πιστολάκι Μαλλιών 2150W

Το jRL Forte Pro 2150W προσφέρει 95.000 RPM, τεχνολογία αυτοκαθαρισμού και ιονισμό. Ελαφρύ, ισχυρό και διαθέσιμο σε Black & White για επαγγελματίες.

Επαγγελματικό σεσουάρ μαλλιών jRL Forte Pro 2150W με ψηφιακό μοτέρ υψηλής ταχύτητας που φτάνει τις 95.000 RPM. Διαθέτει προηγμένη λειτουργία αυτοκαθαρισμού, ενσωματωμένο ιονιστή για μείωση του φριζαρίσματος και εξαιρετικά ελαφρύ σχεδιασμό για ξεκούραστη χρήση όλη την ημέρα. Διαθέσιμο σε Black και White.

jRL Forte Pro Epangelmatiko Pistolaki Mallion 2150W
```

Example product.html:

> This is a medium length description, sometimes it's a little shorter and sometimes much longer depending on the information that should be included here.

```html
<h3>jRL Forte Pro: Η Εξέλιξη στο Επαγγελματικό Στέγνωμα</h3>
<p>Το <strong>jRL Forte Pro 2150W</strong> αποτελεί την κορυφαία επιλογή για κομμωτήρια και barbershops που αναζητούν την τέλεια ισορροπία μεταξύ ισχύος και εργονομίας. Εξοπλισμένο με ένα πανίσχυρο ψηφιακό μοτέρ DC που περιστρέφεται έως και <strong>95.000 φορές το λεπτό (RPM)</strong>, προσφέρει ροή αέρα υψηλής πίεσης που μειώνει τον χρόνο στεγνώματος στο μισό, χωρίς να καταστρέφει την τρίχα.</p>

<h3>Τεχνολογία Αυτοκαθαρισμού (Auto-Cleaning)</h3>
<p>Ένα από τα πιο καινοτόμα χαρακτηριστικά του Forte Pro είναι η λειτουργία <strong>Auto-Cleaning</strong>. Με το πάτημα ενός κουμπιού, το μοτέρ περιστρέφεται αντίστροφα, αποβάλλοντας τη σκόνη και τα κατάλοιπα προϊόντων από το φίλτρο. Αυτή η διαδικασία εξασφαλίζει τη μέγιστη διάρκεια ζωής της συσκευής και διατηρεί τη ροή του αέρα πάντα στο 100% της απόδοσής της.</p>

<h3>Φροντίδα και Προστασία με Ιονισμό</h3>
<p>Η ενσωματωμένη γεννήτρια αρνητικών ιόντων βοηθά στη σφράγιση των περιβλημάτων της τρίχας, κλειδώνοντας τη φυσική υγρασία στο εσωτερικό. Το αποτέλεσμα είναι μαλλιά πιο λεία, λαμπερά και χωρίς στατικό ηλεκτρισμό ή φριζάρισμα, προσφέροντας ένα premium φινίρισμα σε κάθε look.</p>

<h3>Τεχνικά Χαρακτηριστικά</h3>
<table>
  <tr>
    <td><strong>Ισχύς</strong></td>
    <td>2150W</td>
  </tr>
  <tr>
    <td><strong>Ταχύτητα Μοτέρ</strong></td>
    <td>95.000 RPM (Brushless DC Motor)</td>
  </tr>
  <tr>
    <td><strong>Βάρος</strong></td>
    <td>320gr (εξαιρετικά ελαφρύ)</td>
  </tr>
  <tr>
    <td><strong>Ρυθμίσεις</strong></td>
    <td>3 Ταχύτητες & 3 Θερμοκρασίες + Κουμπί Κρύου Αέρα</td>
  </tr>
  <tr>
    <td><strong>Επίπεδο Θορύβου</strong></td>
    <td>Χαμηλό (78dB)</td>
  </tr>
  <tr>
    <td><strong>Επιλογές Χρώματος</strong></td>
    <td>Διαθέσιμο σε Black (Μαύρο) και White (Λευκό)</td>
  </tr>
</table>

<h3>Γιατί να επιλέξετε το jRL Forte Pro;</h3>
<ul>
  <li><strong>Εργονομία:</strong> Το εξαιρετικά χαμηλό βάρος του προλαμβάνει την κόπωση του καρπού και των ώμων κατά τη διάρκεια της ημέρας.</li>
  <li><strong>Έξυπνη Μνήμη:</strong> Η συσκευή "θυμάται" τις τελευταίες ρυθμίσεις θερμοκρασίας και ταχύτητας που χρησιμοποιήσατε.</li>
  <li><strong>LED Ένδειξη Καθαρισμού:</strong> Σας ειδοποιεί πότε το φίλτρο χρειάζεται καθαρισμό για την αποφυγή υπερθέρμανσης.</li>
  <li><strong>Πλήρες Σετ:</strong> Περιλαμβάνει 2 ακροφύσια (στόμια) διαφορετικού μεγέθους και φυσούνα (diffuser) για μπούκλες.</li>
</ul>

<p>Το jRL Forte Pro είναι σχεδιασμένο για να αντέχει στις απαιτητικές συνθήκες ενός επαγγελματικού χώρου, προσφέροντας ταυτόχρονα την πολυτέλεια και την τεχνολογία που αξίζουν οι πελάτες σας.</p>
```

## Required Details

To generate these details for any given product user must provide given inputs;

- Product Title (as a reference to help)
- Target Language (which language to create content in)
- Some Product Page Links (to get more details about products, this is optional)

Sometimes user may provide extra details, or guides about how to create contents so benefit from user input.

## FAQ

Q: Product has variants, how to proceed?
A: In these cases focus on general information that doesn't depend on attributes, for example a product might have multiple colors in this case don't create a color specific content, which would not apply for other variants. Instead create a more general content that is same for all variants such as product's length or features etc. And you can also include list of available colors or tell it shortly in short description and/or meta description.

## Notes

Talk in English with the user, communication between agent and user must stay in English doesn't matter the product content language.
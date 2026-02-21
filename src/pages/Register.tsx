// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { PeptideChain3D } from "@/components/PeptideChain3D";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useCartStore } from "@/stores/cartStore";
// import { Loader2, ShoppingCart, Minus, Plus, Trash2, Dna } from "lucide-react";
// import { toast } from "sonner";
// import { z } from "zod";

// const registrationSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100),
//   email: z.string().trim().email("Invalid email address").max(255),
//   phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
//   address: z.string().trim().min(5, "Please enter your full address").max(500),
//   city: z.string().trim().min(1, "City is required").max(100),
//   state: z.string().trim().min(1, "State is required").max(100),
//   pincode: z.string().trim().min(4, "Enter a valid pincode").max(10),
//   notes: z.string().trim().max(500).optional(),
// });

// type RegistrationData = z.infer<typeof registrationSchema>;

// const Register = () => {
//   const navigate = useNavigate();
//   const { items, updateQuantity, removeItem } = useCartStore();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
//   const [form, setForm] = useState<RegistrationData>({
//     name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", notes: "",
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleChange = (field: keyof RegistrationData, value: string) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);

//   //   const result = registrationSchema.safeParse(form);
//   //   if (!result.success) {
//   //     const fieldErrors: Partial<Record<keyof RegistrationData, string>> = {};
//   //     result.error.errors.forEach(err => {
//   //       const field = err.path[0] as keyof RegistrationData;
//   //       if (!fieldErrors[field]) fieldErrors[field] = err.message;
//   //     });
//   //     setErrors(fieldErrors);
//   //     setIsSubmitting(false);
//   //     return;
//   //   }

//   //   await new Promise(resolve => setTimeout(resolve, 1200));

//   //   const registration = {
//   //     ...result.data,
//   //     items: items.map(item => ({
//   //       title: item.product.title,
//   //       variant: item.variantTitle,
//   //       quantity: item.quantity,
//   //     })),
//   //     timestamp: new Date().toISOString(),
//   //   };

//   //   const existing = JSON.parse(localStorage.getItem("registrations") || "[]");
//   //   existing.push(registration);
//   //   localStorage.setItem("registrations", JSON.stringify(existing));

//   //   toast.success("Registration submitted successfully!");
//   //   navigate("/thank-you");
//   // };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // 1. Validate Form using your Zod schema
//     const result = registrationSchema.safeParse(form);
//     if (!result.success) {
//       const fieldErrors: Partial<Record<keyof RegistrationData, string>> = {};
//       result.error.errors.forEach(err => {
//         const field = err.path[0] as keyof RegistrationData;
//         if (!fieldErrors[field]) fieldErrors[field] = err.message;
//       });
//       setErrors(fieldErrors);
//       setIsSubmitting(false);
//       return;
//     }

//     // 2. Prepare Data Object
//     const registrationData = {
//       ...result.data,
//       items: items.map(item => ({
//         title: item.product.title,
//         variant: item.variantTitle,
//         quantity: item.quantity,
//       })),
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // 3. Send to your Google Apps Script
//       // We use no-cors because Google Scripts don't return standard CORS headers
//       fetch("https://script.google.com/macros/s/AKfycbx-sV64TpZ8cOFTlpHjpL4R2qqyYLQSrpbufLYnG8ufn55MGt38KWe2tij6Bf8b5yVh/exec", {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(registrationData),
//       });

//       // 4. Format WhatsApp Message
//       const productSummary = items
//         .map((item) => `• *${item.product.title}* (${item.variantTitle}) x${item.quantity}`)
//         .join("%0A");

//       const waMessage = `*NEW PRODUCT REGISTRATION*%0A%0A` +
//         `*Name:* ${form.name}%0A` +
//         `*Phone:* ${form.phone}%0A` +
//         `*Location:* ${form.city}, ${form.state}%0A%0A` +
//         `*Products:*%0A${productSummary}%0A%0A` +
//         `*Notes:* ${form.notes || "None"}`;

//       const waUrl = `https://wa.me/918610740116?text=${waMessage}`;

//       // 5. Finalize UX
//       toast.success("Registration Sent! Redirecting to WhatsApp...");
      
//       // Clear cart from local state if your store supports it
//       // useCartStore.getState().clear(); 

//       setTimeout(() => {
//         window.location.href = waUrl;
//       }, 1200);

//     } catch (error) {
//       console.error("Submission error:", error);
//       toast.error("There was a connection issue. Please try again.");
//       setIsSubmitting(false);
//     }
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-background relative">
//         <PeptideChain3D />
//         <div className="relative z-10">
//           <Header />
//           <main className="pt-28 md:pt-36 pb-20 min-h-[70vh] flex items-center justify-center">
//             <div className="text-center px-4">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
//                 <ShoppingCart className="w-10 h-10 text-primary" />
//               </div>
//               <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">Your cart is empty</h1>
//               <p className="text-muted-foreground mb-8">Add some products to register your interest.</p>
//               <Link to="/#products">
//                 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" size="lg">
//                   Browse Products
//                 </Button>
//               </Link>
//             </div>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background relative">
//       <PeptideChain3D />
//       <div className="relative z-10">
//         <Header />

//         <main className="pt-28 md:pt-36 pb-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-10 sm:mb-12">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
//                 <Dna className="w-4 h-4 text-primary" />
//                 <span className="text-sm text-primary font-medium">Product Registration</span>
//               </div>
//               <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
//                 <span className="text-foreground">Register Your </span>
//                 <span className="gradient-text">Interest</span>
//               </h1>
//               <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
//                 Fill in your details below. Our team will contact you to complete the order over a call.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
//               {/* Cart Summary */}
//               <div className="lg:col-span-2 lg:order-2">
//                 <div className="glass-card p-4 sm:p-6 sticky top-28">
//                   <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
//                     <ShoppingCart className="w-5 h-5 text-primary" />
//                     Selected Products
//                   </h2>

//                   <div className="space-y-3 sm:space-y-4 mb-6">
//                     {items.map(item => (
//                       <div key={item.variantId} className="flex gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
//                         <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-secondary/50 overflow-hidden flex-shrink-0">
//                           {item.product.image ? (
//                             <img src={item.product.image} alt={item.product.title} className="w-full h-full object-cover" />
//                           ) : (
//                             <div className="w-full h-full flex items-center justify-center">
//                               <Dna className="w-5 h-5 text-primary/40" />
//                             </div>
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-medium text-sm text-foreground truncate">{item.product.title}</h4>
//                           <p className="text-xs text-muted-foreground">{item.variantTitle}</p>
//                           <div className="flex items-center justify-between mt-1">
//                             <div className="flex items-center gap-1">
//                               <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-foreground" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
//                                 <Minus className="h-3 w-3" />
//                               </Button>
//                               <span className="w-6 text-center text-xs font-medium text-foreground">{item.quantity}</span>
//                               <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-foreground" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
//                                 <Plus className="h-3 w-3" />
//                               </Button>
//                             </div>
//                             <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.variantId)}>
//                               <Trash2 className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="border-t border-border pt-4">
//                     <p className="text-xs text-muted-foreground">
//                       Pricing will be discussed by our team over call.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Registration Form */}
//               <div className="lg:col-span-3 lg:order-1">
//                 <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
//                   <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">Your Details</h2>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
//                       <Input value={form.name} onChange={e => handleChange("name", e.target.value)} placeholder="John Doe" className="bg-secondary/30 border-border focus:border-primary" />
//                       {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
//                       <Input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} placeholder="john@example.com" className="bg-secondary/30 border-border focus:border-primary" />
//                       {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
//                     <Input type="tel" value={form.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+91 86107 40116" className="bg-secondary/30 border-border focus:border-primary" />
//                     {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1.5">Address *</label>
//                     <Textarea value={form.address} onChange={e => handleChange("address", e.target.value)} placeholder="Street address, apartment, etc." rows={3} className="bg-secondary/30 border-border focus:border-primary resize-none" />
//                     {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-1.5">City *</label>
//                       <Input value={form.city} onChange={e => handleChange("city", e.target.value)} placeholder="Coimbatore" className="bg-secondary/30 border-border focus:border-primary" />
//                       {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-1.5">State *</label>
//                       <Input value={form.state} onChange={e => handleChange("state", e.target.value)} placeholder="Tamil Nadu" className="bg-secondary/30 border-border focus:border-primary" />
//                       {errors.state && <p className="text-xs text-destructive mt-1">{errors.state}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-1.5">Pincode *</label>
//                       <Input value={form.pincode} onChange={e => handleChange("pincode", e.target.value)} placeholder="641011" className="bg-secondary/30 border-border focus:border-primary" />
//                       {errors.pincode && <p className="text-xs text-destructive mt-1">{errors.pincode}</p>}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1.5">Additional Notes</label>
//                     <Textarea value={form.notes} onChange={e => handleChange("notes", e.target.value)} placeholder="Any specific requirements or questions..." rows={3} className="bg-secondary/30 border-border focus:border-primary resize-none" />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 glow-effect font-display" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="w-5 h-5 animate-spin mr-2" />
//                         Submitting...
//                       </>
//                     ) : (
//                       "Submit Registration"
//                     )}
//                   </Button>

//                   <p className="text-xs text-center text-muted-foreground">
//                     By submitting, you agree to be contacted by our sales team regarding your product interest.
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PeptideChain3D } from "@/components/PeptideChain3D";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, ShoppingCart, Minus, Plus, Trash2, Dna } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const registrationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  address: z.string().trim().min(5, "Please enter your full address").max(500),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
  pincode: z.string().trim().min(4, "Enter a valid pincode").max(10),
  notes: z.string().trim().max(500).optional(),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const Register = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [form, setForm] = useState<RegistrationData>({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", notes: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (field: keyof RegistrationData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Validate Form
    const result = registrationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegistrationData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof RegistrationData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // 2. Prepare Data Object
    const registrationData = {
      ...result.data,
      items: items.map(item => ({
        title: item.product.title,
        variant: item.variantTitle,
        quantity: item.quantity,
      })),
      timestamp: new Date().toISOString(),
    };

    try {
      // 3. Send to Google Apps Script (Handles Sheets + 2 Emails)
      fetch("https://script.google.com/macros/s/AKfycbxvQ7vUC7OlyOELMqDl9IZXYHR0dia2wtHR62CIsR4ANfNk1Am39PByRMLIU4-JcLL8/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      });

      // 4. Format WhatsApp Message
      const productSummary = items
        .map((item) => `• *${item.product.title}* (${item.variantTitle}) x${item.quantity}`)
        .join("%0A");

      const waMessage = 
        `*📦 NEW REGISTRATION*%0A%0A` +
        `*Name:* ${form.name}%0A` +
        `*Phone:* ${form.phone}%0A%0A` +
        `*Address:*%0A${form.address}%0A${form.city}, ${form.state} - ${form.pincode}%0A%0A` +
        `*Products:*%0A${productSummary}%0A%0A` +
        `*Notes:* ${form.notes || "None"}`;

      const waUrl = `https://wa.me/919360500020?text=${waMessage}`;

      // 5. Finalize UX
      toast.success("Registration Sent!Confirm your order with a text. Redirecting to WhatsApp...");
      
      // Clear cart locally after submission
      if (clearCart) clearCart(); 

      setTimeout(() => {
        window.location.href = waUrl;
      }, 1500);

    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was a connection issue. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background relative">
        <PeptideChain3D />
        <div className="relative z-10">
          <Header />
          <main className="pt-28 md:pt-36 pb-20 min-h-[70vh] flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">Add some products to register your interest.</p>
              <Link to="/#products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <PeptideChain3D />
      <div className="relative z-10">
        <Header />

        <main className="pt-28 md:pt-36 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <Dna className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Product Registration</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Register Your </span>
                <span className="gradient-text">Interest</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                Fill in your details below. Our team will contact you to complete the order over a call.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Cart Summary */}
              <div className="lg:col-span-2 lg:order-2">
                <div className="glass-card p-4 sm:p-6 sticky top-28">
                  <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    Selected Products
                  </h2>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    {items.map(item => (
                      <div key={item.variantId} className="flex gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-secondary/50 overflow-hidden flex-shrink-0">
                          {item.product.image ? (
                            <img src={item.product.image} alt={item.product.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Dna className="w-5 h-5 text-primary/40" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-foreground truncate">{item.product.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.variantTitle}</p>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-foreground" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-6 text-center text-xs font-medium text-foreground">{item.quantity}</span>
                              <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-foreground" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.variantId)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground">
                      Pricing and delivery will be discussed by our team over call.
                    </p>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              <div className="lg:col-span-3 lg:order-1">
                <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
                  <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">Your Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <Input value={form.name} onChange={e => handleChange("name", e.target.value)} placeholder="John Doe" className="bg-secondary/30 border-border focus:border-primary" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <Input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} placeholder="john@example.com" className="bg-secondary/30 border-border focus:border-primary" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                    <Input type="tel" value={form.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+91 93605 00020" className="bg-secondary/30 border-border focus:border-primary" />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Address *</label>
                    <Textarea value={form.address} onChange={e => handleChange("address", e.target.value)} placeholder="House No, Street, Landmark, etc." rows={3} className="bg-secondary/30 border-border focus:border-primary resize-none" />
                    {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">City *</label>
                      <Input value={form.city} onChange={e => handleChange("city", e.target.value)} placeholder="Coimbatore" className="bg-secondary/30 border-border focus:border-primary" />
                      {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">State *</label>
                      <Input value={form.state} onChange={e => handleChange("state", e.target.value)} placeholder="Tamil Nadu" className="bg-secondary/30 border-border focus:border-primary" />
                      {errors.state && <p className="text-xs text-destructive mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Pincode *</label>
                      <Input value={form.pincode} onChange={e => handleChange("pincode", e.target.value)} placeholder="641011" className="bg-secondary/30 border-border focus:border-primary" />
                      {errors.pincode && <p className="text-xs text-destructive mt-1">{errors.pincode}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Additional Notes</label>
                    <Textarea value={form.notes} onChange={e => handleChange("notes", e.target.value)} placeholder="Any specific requirements..." rows={3} className="bg-secondary/30 border-border focus:border-primary resize-none" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 glow-effect font-display" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      "Submit & Confirm on WhatsApp"
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    You will be redirected to WhatsApp to finalize your registration.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Register;
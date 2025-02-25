const url =
  "https://site-a.eduresearchers.com/wp-json/spp/v1/payment-details-api";

const data = {
  id: "evt_1QpUOjE0bAsB0kCmeoKbgqsb",
  object: "event",
  api_version: "2023-08-16",
  created: 1738845696,
  data: {
    object: {
      id: "cs_test_a1W9TEp68vy0O4Zb6J1AimV64ZiV7cfWiB9OrXdrgec4rvarXuTY9Jr9NS",
      object: "checkout.session",
      adaptive_pricing: { enabled: false },
      after_expiration: null,
      allow_promotion_codes: null,
      amount_subtotal: 31491,
      amount_total: 31491,
      automatic_tax: { enabled: false, liability: null, status: null },
      billing_address_collection: null,
      cancel_url:
        "https://site-a.eduresearchers.com/checkout/order-received/509/?key=wc_order_GyIsL3ErNgFJI",
      client_reference_id: null,
      client_secret: null,
      consent: null,
      consent_collection: null,
      created: 1738845686,
      currency: "usd",
      currency_conversion: null,
      custom_fields: [],
      custom_text: {
        after_submit: null,
        shipping_address: null,
        submit: null,
        terms_of_service_acceptance: null,
      },
      customer: null,
      customer_creation: "if_required",
      customer_details: {
        address: {
          city: null,
          country: "PK",
          line1: null,
          line2: null,
          postal_code: null,
          state: null,
        },
        email: "qadamaalam@gmail.com",
        name: "Qadama Ahmed Khan",
        phone: null,
        tax_exempt: "none",
        tax_ids: [],
      },
      customer_email: null,
      discounts: [],
      expires_at: 1738932086,
      invoice: null,
      invoice_creation: {
        enabled: false,
        invoice_data: {
          account_tax_ids: null,
          custom_fields: null,
          description: null,
          footer: null,
          issuer: null,
          metadata: {},
          rendering_options: null,
        },
      },
      livemode: false,
      locale: null,
      metadata: {
        backapi_url:
          "https://site-a.eduresearchers.com/wp-json/spp/v1/payment-details-api",
        order_id: "Order-509",
      },
      mode: "payment",
      payment_intent: "pi_3QpUOhE0bAsB0kCm1ZrhebuP",
      payment_link: null,
      payment_method_collection: "if_required",
      payment_method_configuration_details: null,
      payment_method_options: {
        card: { request_three_d_secure: "automatic" },
      },
      payment_method_types: ["card"],
      payment_status: "paid",
      phone_number_collection: { enabled: false },
      recovered_from: null,
      saved_payment_method_options: null,
      setup_intent: null,
      shipping_address_collection: null,
      shipping_cost: null,
      shipping_details: null,
      shipping_options: [],
      status: "complete",
      submit_type: null,
      subscription: null,
      success_url:
        "https://site-a.eduresearchers.com/checkout/order-received/509/?key=wc_order_GyIsL3ErNgFJI",
      total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
      ui_mode: "hosted",
      url: null,
    },
  },
  livemode: false,
  pending_webhooks: 1,
  request: { id: null, idempotency_key: null },
  type: "checkout.session.completed",
};

const updateProduct = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log("Response:", responseData);
  } catch (error) {
    console.log("Error :", error.message);
  }
};

updateProduct()
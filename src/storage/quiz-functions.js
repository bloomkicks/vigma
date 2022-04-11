const furtherSrc = "/order-assets/further.jpg";
const customSrc = "/order-assets/custom.jpg";

export function getMetaOrders({
  path,
  names,
  queryType,
  title,
  question,
}) {
  const orders = [];

  const customSection = {
    isCustom: true,
    imgSrc: customSrc,
    query: queryType + "=" + "custom",
  };

  for (let name in names) {
    const title = names[name];
    const imgSrc = path + "/" + name + ".jpg";
    const query = queryType + "=" + name;
    const section = {
      title,
      imgSrc,
      query,
      name,
    };
    orders.push(section);
  }

  orders.push(customSection);

  const metaOrders = {
    title,
    question,
    orders,
  };

  return metaOrders;
}

export function getBundle({ path, names, title, question }) {
  const orders = [];

  const furtherSection = {
    title: "Продолжить",
    imgSrc: furtherSrc,
    query: "&bundle=skipped",
    isFurther: true,
  };

  for (let name in names) {
    const title = names[name];
    let imgSrc = path + "/" + name + ".jpg";
    const query = "&" + name + "=" + "current";

    if (["front", "body", "tablet"].includes(name)) {
      path = "/order-assets/materials";
      if (name === "tablet") {
        path = "/order-assets/kitchen";
      }
      imgSrc = path + "/" + name + ".jpg";
    }

    const section = {
      title,
      imgSrc,
      query,
      name,
      path,
    };

    orders.push(section);
  }

  orders.push(furtherSection);

  const metaOrders = {
    title,
    question,
    orders,
  };

  return metaOrders;
}

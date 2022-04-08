export function getMetaOrders({
  path,
  names,
  queryType,
  title,
  question,
}) {
  const orders = [];

  const customSection = {
    custom: true,
    query: queryType + "=" + "custom",
  };

  for (let name of Object.keys(names)) {
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

export function getBundle({
  path,
  names,
  title,
  question,
}) {
  const orders = [];

  const furtherSection = {
    isFurther: true,
    query: "&bundle=custom",
  };

  for (let name of Object.keys(names)) {
    const title = names[name];
    const imgSrc = path + "/" + name + ".jpg";
    const query = "&" + name + "=" + "current";
    const section = {
      title,
      imgSrc,
      query,
      name,
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

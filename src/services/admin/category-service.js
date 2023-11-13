const category_key = "categorys";

/**
 * Lay ra danh sach category o localStorage
 *
 * @returns categorys[]
 */
export const getCategory = () => {
  let categorys = JSON.parse(localStorage.getItem(category_key));

  if (!categorys) {
    categorys = [];
  }

  return categorys;
};

export const setCategorys = (categorys) => {
  if (!categorys) return;
  localStorage.setItem(category_key, JSON.stringify(categorys));
  return getCategory();
};

/**
 * Lay ra 1 doi tuong category theo id truyen vao
 *
 * @param {*} category_id
 * @return category || null
 */
export const getCategoryById = (category_id) => {
  // lay ra danh sach category
  const categorys = getCategory();

  // tim kiem theo id truyen vao
  // cach 1
  let category = null;
  for (let index = 0; index < categorys.length; index++) {
    // so sanh id cua tung phan tu category trong danh sach categorys
    // gia su phan tu thu 2 thoa man
    if (categorys[index].id == category_id) {
      category = categorys[index];
      break;
    }
  }

  // cach 2
  // for (const categoryLoop of categorys) {
  //   if (categoryLoop.id == category_id) {
  //     category = categoryLoop;
  //     break;
  //   }
  // }

  // cach 3
  // return categorys.find((element) => {
  //   return element.id == category_id;
  // });

  return category;
};

export const addCategory = (category) => {
  const categorys = getCategory();
  categorys.push(category); // number index
  return setCategorys(categorys);
};

export const updateCategory = (categoryUpdate) => {
  const categorys = getCategory();
  // cach 1
  const newCategorys = [];
  for (let index = 0; index < categorys.length; index++) {
    let category = categorys[index];
    if (category.id == categoryUpdate.id) {
      category = categoryUpdate;
    }
    newCategorys.push(category);
  }

  // cach 2
  const indexUpdate = categorys.findIndex((element) => {
    return element.id == categoryUpdate.id;
  });

  if (indexUpdate >= 0) {
    categorys.splice(indexUpdate, 1, categoryUpdate);
  }

  // cach 2
  // localStorage.setItem(category_key, JSON.stringify(categorys));

  // cach 3
  // tra ve 1 mang co do dai = mang cu
  // nhung phan tu trong mang moi = return o function callback
  const newUpdate = categorys.map((element) => {
    if (element.id == categoryUpdate.id) {
      return categoryUpdate;
    }

    return element;
  });
  // localStorage.setItem(category_key, JSON.stringify(newUpdate));
  return setCategorys(newCategorys);
};

export const delCategory = (category_id) => {
  const categorys = getCategory();

  const indexDel = categorys.findIndex((element) => {
    return element.id == category_id;
  });

  categorys.splice(indexDel, 1);
  return setCategorys(categorys);
};

export const initCategorys = () => {
  const category = {
    id: 1,
    name: "Danh mục 1",
  };

  const categorys = [];
  for (let index = 0; index < 10; index++) {
    const id = index + 1;
    category.id = id;
    category.name = `Danh mục ${id}`;
    categorys.push({ ...category });
  }

  return setCategorys(categorys);
};

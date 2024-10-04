import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {};
  try {
    const photo = await uploadPhoto();
    res.photo = photo;
    const user = await createUser();
    res.user = user;
  } catch (_) {
    res.photo = null;
    res.user = null;
  }

  return res;
}

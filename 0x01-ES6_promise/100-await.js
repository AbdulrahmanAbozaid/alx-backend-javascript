import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {};
  try {
    const photo = await uploadPhoto();
    res.photo = photo;
  } catch (_) {
    res.photo = null;
  }

  try {
    const user = await createUser();
    res.user = user;
  } catch (_) {
    res.user = null;
  }

  return res;
}

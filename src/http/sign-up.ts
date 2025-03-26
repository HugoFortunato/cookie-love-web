interface SignUpWithPasswordRequest {
  name: string;
  email: string;
  password: string;
}

export async function signUp({
  name,
  email,
  password,
}: SignUpWithPasswordRequest) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.status === 500) {
      throw new Error('User with same e-mail already exists.');
    }

    return res;
  } catch (error) {
    throw error;
  }
}

'use client'

import { getSession } from '@/utils/loginUser'
import React, { useEffect, useState } from 'react'

export default function CheckLogin() {
  const [session, setSession] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    getSession().then((data) => {
        setSession(data);
        console.log("Data session: ", data)
  });
  }, []);

  return (
    <div>
      <h1>Check state</h1> 
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

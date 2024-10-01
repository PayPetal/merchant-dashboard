import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';


export default function Home() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1500);
      return () => clearTimeout(timer);
    }, [navigate]);
    return <main>{loading &&  <p>laoding...</p>}</main>;
  }

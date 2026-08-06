'use client'
import { deleteCarsFromBookedcars } from '@/lib/func';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DeleteFromBooked = ({ booking }) => {  // ✅ destructure করো
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  console.log("Booking:", booking);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (!booking?._id) {
        alert("Booking ID not found!");
        return;
      }
      await deleteCarsFromBookedcars(booking._id);
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AlertDialog>
      <Button className='bg-black text-white'>Delete Booking</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{booking?.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button 
                onClick={handleClick} 
                slot="close" 
                className='bg-black text-white'
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete Booking"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteFromBooked;
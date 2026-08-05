'use client'
import { deleteCarsFromBookedcars, updateBookCar } from '@/lib/func';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteFromBooked = (carId) => {
      
const router=useRouter()
    console.log(carId)
    const handleClick=async()=>{
        await updateBookCar(carId._id)
     await deleteCarsFromBookedcars(carId._id)
     router.refresh()
    }
    return (
        
             <AlertDialog>
      <Button  className='bg-black text-white'>Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carId.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleClick} slot="close" className='bg-black text-white'>
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        
    );
};

export default DeleteFromBooked;
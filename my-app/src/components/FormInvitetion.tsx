    import React, { useRef, useState } from 'react'

    export default function FormInvitetion() {
        const [name, setName] = useState('')
        const [count, setCount] = useState('')
        const [attendance, setAttendance] = useState(''); 
        const [invitedBy, setInvitedBy] = useState('');
        const [isFirstClick, setIsFirstClick] = useState(false);
        const formRef = useRef<HTMLFormElement>(null);


        const sendData = (e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            setIsFirstClick(true)
                if(!name || !count || !attendance || !invitedBy) return

            const formData = {
            name,
            count,
            attendance,
            invitedBy
        };
        console.log("📨 Ուղարկված տվյալներ:", formData);

        formRef.current?.submit();

        }

    return (
        <div className='flex flex-col justify-center items-center m-7 gap-3'>
            <div className='text-4xl'>ՀԱՐՑԱԹԵՐԻԿ</div>
            <div className='text-center'>Խնդրում ենք հաստատել Ձեր ներկայությունը։ Կսպասենք Ձեր պատասխանին մինչև <b>հունիսի 25-ը</b></div>
            <form  onSubmit={sendData} ref={formRef}  className='flex flex-col justify-center items-center text-center mt-3'>
                <div className='text-xl'>Խմդրում ենք գրեք Ձեր անունը և ազգանունը</div>
                <input type='text' name='name' value={name} required autoComplete='off' 
                    className={`border-b border-b-gray-400 w-full mb-5 text-center`} onChange={(e)=>setName(e.target.value)}/>
                <div className='mt-5'>Կկարողանաք ներկա գտնվել?</div>
                <div className='radiobox-body my-2 w-full'>
                    <div className='yes'> 
                        <input type='radio' name='radio' id='radiobox' value='Այո, մեծ հաճույքով'
                        checked={attendance === 'Այո, մեծ հաճույքով'}  onChange={() => setAttendance('Այո, մեծ հաճույքով')}/>
                        <label htmlFor='radiobox' id="label"></label>
                        <label htmlFor='radiobox' id="label2">Այո, մեծ հաճույքով</label>

                    </div>
                    <div className='no'>
                        <input type='radio' name='radio' id='radiobox1' value='Ոչ, ցավոք չեմ կարող'
                        checked={attendance === 'Ոչ, ցավոք չեմ կարող'} onChange={() => setAttendance('Ոչ, ցավոք չեմ կարող')}/>
                        <label htmlFor='radiobox1' id="label1"></label>
                        <label htmlFor='radiobox1' id="label2">Ոչ, ցավոք չեմ կարող</label>

                    </div>

                </div>
                {isFirstClick && !attendance && <div className='text-xs text-red-500'>Խնրում ենք նշել</div>}
                    <div className='my-4'>Ում կողմից եք հրավիրված?</div>

                <div className='radiobox-body my-2 w-full'>
                    <div className='Arami'> 
                        <input type='radio' name='radio1' id='radiobox2' value='Արամ'
                        checked={invitedBy === 'Արամ'}  onChange={() => setInvitedBy('Արամ')} />
                        <label htmlFor='radiobox2' id="label3"></label>
                        <label htmlFor='radiobox2' id="label4">Արամ</label>

                    </div>
                    <div className='Arminei'>
                        <input type='radio' name='radio1' id='radiobox3' value='Արմինե'
                        checked={invitedBy === 'Արմինե'}   onChange={() => setInvitedBy('Արմինե')}/>
                        <label htmlFor='radiobox3' id="label5"></label>
                        <label htmlFor='radiobox3' id="label4">Արմինե</label>

                    </div>

                </div>
                {isFirstClick && !invitedBy && <div className='text-xs text-red-500'>Խնրում ենք նշել</div>}

                <div className='my-4 text-xl'>Հյուրերի քանակը</div>

                <input type='text' name='count' required autoComplete='off' value={count} 
                    className='border-b border-b-gray-400 w-full text-center mb-2' onChange={(e)=>setCount(e.target.value)}/>


                <button type="submit" className='mt-2 text-lg bg-gray-700 text-white p-1.5 rounded-2xl px-15'>Ուղարկել</button>


            </form>
        </div>
    )
    }

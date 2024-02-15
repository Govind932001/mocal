<?php

namespace App\Http\Livewire;

use Carbon\Carbon;
use Livewire\Component;
use DB;

class CalendarComponent extends Component
{
    public $month;
    public $year;
    public $events = [];

    public function mount()
    {
        $this->month = date('n');
        $this->year = date('Y');
    }

    public function render()
    {       

      
        
        $currentDate = Carbon::now();
        $startOfWeek = $currentDate->startOfWeek()->format('j M');
        $endOfWeek = $currentDate->endOfWeek()->format('j M Y');
        $daystartOfWeek = $currentDate->startOfWeek();

        $data = DB::table('m_event_calendar_settings')
            ->leftJoin('m_users', 'm_users.id', '=', 'm_event_calendar_settings.user_id')
            ->get();

        for ($i = 0; $i < 7; $i++) {
            $date = $daystartOfWeek->copy()->addDays($i);
            $dateKey = $date->format('j M');
            $weekDates[$dateKey] = [];
            
            foreach ($data as $record) {
                $startDate = Carbon::parse($record->start_date_time);
                $endDate = Carbon::parse($record->end_date_time);
   
                $isSunday = $date->isSunday();
                if ($date->between($startDate, $endDate)) {
                    
                    for ($hour = 0; $hour < 24; $hour++) {
                        $dateTime = $date->copy()->addHours($hour);
                        if ($dateTime->between($startDate, $endDate, true)) {
                            $weekDates[$dateKey][] = [
                                'time' => $dateTime->format('H:i'),
                                'record' => $record,
                                'close' => $isSunday ? 1 : 0
                            ];
                        }else{
                            $weekDates[$dateKey][] = [
                                'time' => $dateTime->format('H:i'),
                                'record' => null,
                                'close' => $isSunday ? 1 : 0
                            ];

                        }
                    }
                } else {
                    for ($hour = 0; $hour < 24; $hour++) {
                        $dateTime = $date->copy()->addHours($hour);
                        $weekDates[$dateKey][] = [
                            'time' => $dateTime->format('H:i'),
                            'record' => null ,
                            'close' => $isSunday ? 1 : 0
                        ];
                    }
                }
            }
        }

        // dd($weekDates);

        $timeZone = $currentDate->getTimezone();
        $timeZoneName = $timeZone->getName();

        $currentDateTime = Carbon::now();
        $currentFormattedTime = $currentDateTime->format('H:i');
        $timesArray = [];
        $time = Carbon::createFromTime(0, 0, 0);
        for ($i = 0; $i < 24; $i++) {
            $timesArray[] = $time->format('H:i');
            $time->addHour();
        }
        
        return view('livewire.calendar-component',compact('startOfWeek','endOfWeek','weekDates','timeZoneName','currentFormattedTime','timesArray'));
    }

}

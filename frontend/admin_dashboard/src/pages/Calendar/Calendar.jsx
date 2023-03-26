import React from 'react'
import Header from '../../components/Header/Header'
import { tokens } from '../../theme'
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

function Calendar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setcurrentEvents] = useState([]) // Updates the Current Events when user adds the Event

    const handleDateClick = (selected) => {
        // This Prompt appears when an Event is clicked on the calendar
        const title = prompt("Please select a new title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}${title}`,
                title: `${title}`,
                // Setting the Start day , End Day and if the event is all-day long or not
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
        console.log(currentEvents)
    }
    const handleEventClick = (selected) => {
        // This Functions removes the event if you click on it a second Time..
        if (window.confirm(`Are you Sure you want to delete the event!! ${selected.event.title}`)) {
            selected.event.remove()
        }
    }
    return (
        <Box m='20px'>
            <Header title='CALENDAR' subtitle='This shows the Calendar' />
            <Box display='flex' justifyContent='space-between'>
                {/* The left side box for shwoing current events */}
                <Box
                    flex='1 1 20%'
                    backgroundColor={colors.primary[400]}
                    p='15px'
                    borderRadius='4px'
                >
                    <Typography
                        variant='h5'
                    >
                        Events
                    </Typography>   
                    <List> 
                        {currentEvents.map((event) => (
                            <ListItem // using MUI Lists to List out the events
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, { // Format date allows to set the date in the format whe want
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex='1 1 100%' ml='15px'>
                    <FullCalendar
                        height='75vh'
                        plugins={[
                            // Some of the inbuilt Plugins which allow different views in Fullcalendar
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            // the header toolbar has some functionality 
                            left: 'prev,next,today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick} // Mentioned above 
                        eventClick={handleEventClick} // Mentioned Above
                        eventsSet={(events) => {
                            // Appends events 
                            setcurrentEvents(events)
                        }}
                        initialEvents={[
                            {
                                id: '1234',
                                title: 'All-Day Event',
                                date: '2023-03-24'
                            },
                            {
                                id: '4321',
                                title: 'Timed Event',
                                date: '2023-03-23'
                            }
                        ]}
                    >
                    </FullCalendar>
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar
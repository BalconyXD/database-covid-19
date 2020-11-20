input.onButtonPressed(Button.A, function () {
    Yes += 1
    list[Yes] = Yes
    basic.showNumber(Yes)
    dataStreamer.writeString("Covid-19 :  ")
    dataStreamer.writeNumber(list[Yes])
    dataStreamer.writeLine()
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    sum = Yes + No
    dataStreamer.writeString("All patients undergoing x-ray : ")
    dataStreamer.writeNumber(sum)
    dataStreamer.writeLine()
    dataStreamer.writeString(" Patients with Covid-19 : ")
    dataStreamer.writeNumber(list[Yes])
    dataStreamer.writeLine()
    dataStreamer.writeString(" Percent of patients with covid 19 : ")
    dataStreamer.writeNumber(list[Yes] * 100 / sum, 2)
    dataStreamer.writeString("  % ")
    dataStreamer.writeLine()
    dataStreamer.writeString(" Patients without Covid-19 : ")
    dataStreamer.writeNumber(list[No])
    dataStreamer.writeLine()
    dataStreamer.writeString(" Percent of patients without covid 19 : ")
    dataStreamer.writeNumber(list[No] * 100 / sum, 2)
    dataStreamer.writeString("  % ")
    dataStreamer.writeLine()
})
input.onButtonPressed(Button.B, function () {
    No += 1
    list[No] = No
    basic.showNumber(No)
    dataStreamer.writeString("Non Covid-19 :  ")
    dataStreamer.writeNumber(list[No])
    dataStreamer.writeLine()
    basic.clearScreen()
})
let sum = 0
let Yes = 0
let No = 0
let list: number[] = []
list = [No, Yes]
No = 0
Yes = 0
sum = 0

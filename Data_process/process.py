import csv

with open('metadata.csv','r',encoding="utf8") as csv_file:
    with open('metadata2.csv', 'w',encoding="utf8") as csvoutput:
        csv_reader = csv.reader(csv_file)
        writer = csv.writer(csvoutput, lineterminator='\n')
        
        all = []
        row = next(csv_reader)
        row.append('Year')
        all.append(row)
        #print(row)

        for row in csv_reader:
            row.append(row[9][0:4])
            all.append(row)
            #print(row)

        writer.writerows(all)

    